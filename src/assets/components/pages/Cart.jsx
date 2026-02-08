import React, { useContext } from "react";
import { MyGlobalContext } from "../context/MainContextFile";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default function Cart() {
  let { cartCount, setCartCount } = useContext(MyGlobalContext);

  let increaseQty = (id) => {
    let updatedCart = cartCount.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartCount(updatedCart);
  };

  let decreaseQty = (id) => {
    let updatedCart = cartCount.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartCount(updatedCart);
  };

  let removeItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let updatedCart = cartCount.filter(
          (item) => item.id !== id
        );
        setCartCount(updatedCart);

        Swal.fire({
          title: "Removed!",
          icon: "success",
        });
      }
    });
  };

  // Subtotal
  let totalPrice =
    cartCount.length > 0
      ? cartCount.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
      : 0;

  // GST (18%)
  let gst = totalPrice > 0 ? totalPrice * 0.18 : 0;

  // Final Total
  let finalTotal = totalPrice + gst;

  return (
    <>
      <main className="max-w-[1320px] mx-auto">
        <div className="lg:flex gap-5 py-5">
          
          {/* CART ITEMS */}
          <div className="lg:w-[75%] p-3 bg-gray-600 rounded-2xl text-white relative">
            {cartCount.length === 0 ? (
              <div className="bg-gray-100 p-6 rounded-xl text-center text-black">
                Your cart is empty 🛒
              </div>
            ) : (
              cartCount.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow flex justify-between items-center mb-4"
                >
                  {/* LEFT */}
                  <div className="flex gap-5 items-center w-[60%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain rounded-lg"
                    />

                    <div>
                      <h2 className="font-semibold text-lg text-black">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        $. {item.price}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-8">

                    {/* Quantity */}
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-1 bg-gray-100">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-7 h-7 text-black bg-white rounded shadow"
                      >
                        -
                      </button>

                      <span className="w-6 text-center text-black">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-7 h-7 text-black bg-white rounded shadow"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="font-semibold text-lg text-black">
                      $. {(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      <RxCross2 size={22} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:flex-1 mt-5 lg:mt-0">
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-white/10 text-white">
              <h2 className="text-lg font-semibold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span>Total Items</span>
                <span>{cartCount.length}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$. {totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>GST (18%)</span>
                <span>$. {gst.toFixed(2)}</span>
              </div>

              <hr className="my-3 border-white/20" />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$. {finalTotal.toFixed(2)}</span>
              </div>

              <button
                disabled={cartCount.length === 0}
                className={`w-full mt-6 font-medium py-2.5 rounded-md transition ${
                  cartCount.length === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
