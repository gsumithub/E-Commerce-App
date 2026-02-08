import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { MyGlobalContext } from "../context/MainContextFile";

export default function Header() {
  let {cartCount} =useContext(MyGlobalContext)
  
  let [category, setCategory] = useState([]);

  let getCategory = async () => {
    let apiData = await fetch(
      `https://wscubetech.co/ecommerce-api/categories.php`
    );

    let finalData = await apiData.json();
    let { data } = finalData;
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  
  return (
    <>
      <nav className="bg-blue-950 text-white sticky w-full z-20 top-0 border-b border-default">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Logo"
            />
            <span className="text-xl font-semibold">Flowbite</span>
          </Link>

          {/* Right Buttons */}
          <div className="flex md:order-2 space-x-3">
            <Link
              to="/cart"
              className="bg-blue-700 hover:bg-blue-400 flex hover:text-black rounded-xl text-sm px-3 py-2 " 
            >
              Cart <div className="bg-amber-50 rounded-xl  text-black px-2 ml-0.5"> {cartCount.length}</div>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex md:order-1">
            <ul className="flex space-x-8 font-medium">

              <li>
                <Link to='/' className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>

              {/* Products Dropdown */}
              <li className="relative group">
                <Link to="/products" className="hover:text-blue-400">
                  Products
                </Link>

                <div className="absolute hidden group-hover:block top-1 left-0 mt-4 bg-blue-900 border-t border-blue-800 shadow-xl min-w-[280px]">
                  <div className="px-4 py-6 text-white">
                    <h3 className="mb-4 font-bold text-blue-400 uppercase text-xs tracking-wider">
                      Categories
                    </h3>

                    <ul className="space-y-2 h-[300px] overflow-y-auto">
                      {category.map((obj, i) => (
                        <li key={i}>
                          <Link
                            to={`/products/${obj.slug}`}
                            className="hover:text-blue-300 block"
                          >
                            {obj.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
