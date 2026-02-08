import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../common/Loading";
import { MyGlobalContext } from "../context/MainContextFile";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default function Products() {
  let { cartItems, setCartItems } = useContext(MyGlobalContext);

  let [loading, setLoading] = useState(false);
  let [products, setProducts] = useState([]);
  let [category, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);

  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brandFilter, setBrandFilter] = useState([]);
  let [sorting, setSorting] = useState("");
  let [priceFilter, setPriceFilter] = useState([null, null]);
  let [discountedPrice, setDiscountedPrice] = useState([null, null]);
  let [rating, setRating] = useState([null]);

  let [currentPage, setCurrentPage] = useState(1);
  let [totalPage, setTotalPage] = useState(0);

  let [openFilter, setOpenFilter] = useState({
    category: true,
    brand: true,
    price: true,
    discount: true,
    rating: true,
  });

  let toggleFilter = (section) => {
    setOpenFilter((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  let getCategory = async () => {
    let res = await fetch("https://wscubetech.co/ecommerce-api/categories.php");
    let data = await res.json();
    setCategory(data.data);
  };

  let getBrand = async () => {
    let res = await fetch("https://wscubetech.co/ecommerce-api/brands.php");
    let data = await res.json();
    setBrand(data.data);
  };

  let getProducts = async () => {
    setLoading(true);
    let res = await axios.get(
      "https://wscubetech.co/ecommerce-api/products.php",
      {
        params: {
          page: currentPage,
          limit: 16,
          sorting,
          price_from: priceFilter[0],
          price_to: priceFilter[1],
          discount_from: discountedPrice[0],
          discount_to: discountedPrice[1],
          rating,
          brands: brandFilter.join(","),
          categories: categoryFilter.join(","),
        },
      },
    );

    setProducts(res.data.data);
    setTotalPage(res.data.total_pages);

    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
  };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  useEffect(() => {
    getProducts();
  }, [
    categoryFilter,
    brandFilter,
    sorting,
    priceFilter,
    discountedPrice,
    rating,
    currentPage,
  ]);

  let handleCheckbox = (value, state, setter) => {
    if (state.includes(value)) {
      setter(state.filter((v) => v !== value));
    } else {
      setter([...state, value]);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="max-w-[1320px] mx-auto flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold">Latest Arrivals</h1>

        <select
          onChange={(e) => setSorting(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="">Sort</option>
          <option value="1">Name: A-Z</option>
          <option value="2">Name: Z-A</option>
          <option value="3">Price: Low-High</option>
          <option value="4">Price: High-Low</option>
        </select>
      </div>

      <div className="max-w-[1320px] mx-auto grid grid-cols-[280px_auto] gap-6">
        <div className="bg-white rounded-xl shadow-md p-4 sticky top-5 h-fit">
          <FilterSection
            title="Category"
            isOpen={openFilter.category}
            toggle={() => toggleFilter("category")}
          >
            <ul className="h-[250px] overflow-y-auto space-y-2 pr-2">
              {category.map((item) => (
                <li key={item.slug} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={categoryFilter.includes(item.slug)}
                    onChange={() =>
                      handleCheckbox(
                        item.slug,
                        categoryFilter,
                        setCategoryFilter,
                      )
                    }
                    className="accent-blue-600"
                  />
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection
            title="Brand"
            isOpen={openFilter.brand}
            toggle={() => toggleFilter("brand")}
          >
            <ul className="h-[250px] overflow-y-auto space-y-2 pr-2">
              {brand.map((item) => (
                <li key={item.slug} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={brandFilter.includes(item.slug)}
                    onChange={() =>
                      handleCheckbox(item.slug, brandFilter, setBrandFilter)
                    }
                    className="accent-blue-600"
                  />
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </FilterSection>
          <FilterSection
            title="Price"
            isOpen={openFilter.price}
            toggle={() => toggleFilter("price")}
          >
            <div className="space-y-2 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  onChange={() => setPriceFilter([0, 500])}
                />
                <span>₹0 - ₹500</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  onChange={() => setPriceFilter([501, 1000])}
                />
                <span>₹501 - ₹1000</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  onChange={() => setPriceFilter([1001, 2000])}
                />
                <span>₹1001 - ₹2000</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  onChange={() => setPriceFilter([2001, 999999])}
                />
                <span>₹2000+</span>
              </label>
            </div>
          </FilterSection>
          <FilterSection
            title="Discount"
            isOpen={openFilter.discount}
            toggle={() => toggleFilter("discount")}
          >
            <div className="space-y-2 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discount"
                  onChange={() => setDiscountedPrice([0, 20])}
                />
                <span>0% - 20%</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discount"
                  onChange={() => setDiscountedPrice([21, 40])}
                />
                <span>21% - 40%</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discount"
                  onChange={() => setDiscountedPrice([41, 60])}
                />
                <span>41% - 60%</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discount"
                  onChange={() => setDiscountedPrice([61, 100])}
                />
                <span>60%+</span>
              </label>
            </div>
          </FilterSection>
          <FilterSection
            title="Rating"
            isOpen={openFilter.rating}
            toggle={() => toggleFilter("rating")}
          >
            <div className="space-y-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    onChange={() => setRating([star])}
                  />
                  <span>{star} ⭐ & above</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center py-8">
        <ResponsivePagination
          current={currentPage}
          total={totalPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}

/* FILTER SECTION */

function FilterSection({ title, children, isOpen, toggle }) {
  return (
    <div className="mb-5">
      <div
        onClick={toggle}
        className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>

      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
}
function ProductCard({ data }) {
  let { cartCount, setCartCount } = useContext(MyGlobalContext);

  let { id, name, price, image, slug } = data;

  let existingItem = cartCount?.find((item) => item.id === id);

  let addToCart = () => {
    let updatedCart = [...(cartCount || []), { ...data, quantity: 1 }];
    setCartCount(updatedCart);
    toast.success("Added to cart!");
  };

  let removeFromCart = () => {
    Swal.fire({
      title: "Remove this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
    }).then((result) => {
      if (result.isConfirmed) {
        let filtered = cartCount.filter((item) => item.id !== id);
        setCartCount(filtered);
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <Link to={`/product-details/${slug}`}>
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover rounded-t-xl"
        />
      </Link>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-blue-600 font-bold mt-2">${price}</p>

        {existingItem ? (
          <button
            onClick={removeFromCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full cursor-pointer"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}


