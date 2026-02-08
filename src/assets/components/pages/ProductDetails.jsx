import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MyGlobalContext } from "../context/MainContextFile";

export default function ProductDetails() {
  let {cartCount, setCartCount} =useContext(MyGlobalContext)
  let [productData, setProductData] = useState(null);
  let { slug } = useParams();

  let getSingleProduct = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/productdetails.php?slug=${slug}`
    );
    let finalData = await apiRes.data;
    let { product } = finalData;
    
    setProductData(product);
    setMainImg(product.image)
  };

  useEffect(() => {
    getSingleProduct();
  }, [slug]);


  let [mainImg,setMainImg] =useState('')

  return (
    <>
      {productData && <div className="max-w-screen-xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="bg-gray-100 flex rounded-xl  items-center justify-center p-6">
              <img src={mainImg} alt="" className="rounded-lg object-contain" />
              
            </div>
            

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">{productData.name}</h1>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-blue-700">${productData.price}</span>
              </div>

              <div className="flex gap-4">
                <button onClick={()=>setCartCount(cartCount + 1)} className="flex-1 bg-blue-700 text-white py-3 rounded-xl cursor-pointer">
                  Add to Cart
                </button>
                <button className="flex-1 border border-blue-700 text-blue-700 py-3 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex overflow-x-scroll w-150">
                {productData.multiple_images.map((src)=>{
                  return(
                    <img onClick={()=>setMainImg(src)} width={150} src={src} alt="" />
                  )
                })}
              </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-4">{productData.description}</h2>
            <p className="text-gray-600">description</p>
          </div>
        </div>
        }
        
      
    </>
  );
}
