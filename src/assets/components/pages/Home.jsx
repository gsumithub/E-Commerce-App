import React, { useEffect, useState } from "react";


export default function Home() {
  let [products, setProducts] = useState([]);

  let getProducts = async () => {
    let apiData = await fetch(
      "https://wscubetech.co/ecommerce-api/products.php"
    );
    let finalData = await apiData.json();
    let { data } = finalData; // api is in data prop
    console.log(data);
    

    setProducts(data); //api is now in set category to be used for useState of category
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main>
        <section className="max-w-[1320px] mx-auto py-5 ">
          <h1 className="text-4xl font-bold text-center">
            Celebrating
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam
            quibusdam necessitatibus, quaerat accusantium repellat impedit modi
            sapiente, provident error praesentium minima laborum alias.
            Laboriosam odit sint eius voluptate adipisci.
          </p>
          <div  className="max-w-desktop mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-5 ">
            {products.map((obj,i)=>
            <div key={i} className="bg-neutral-primary-soft block max-w-sm hover:shadow-2xl hover:translate-y-0.5 duration-500 border-0 rounded-xl shadow-xs gap-5">
              <a href="#">
                <img
                  className="rounded-t-base hover:scale-125 duration-500"
                  src={obj.image}
                  
                />
              </a>
              <div className="">
                <h2 className="text-xl border-0 rounded-5 text-center p-2 font-semibold">
                  {obj.name}
                </h2>
                <p className="p-2 text-orange-600">${obj.price}</p>
                <p className="p-2.5"> {obj.description}</p>
              </div>
            </div>
            )}
            
          </div>
          {/* <h1 className="text-4xl font-bold text-center mt-5">
            Celebration wear for Women!
          </h1>
          <p className="text-xl text-center">
            Beautiful collection of Lehenga cholis, Sarees, Salwar suits for
            engagement, wedding and other ethnic occasions.
          </p>
          <div className="max-w-desktop mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-5 ">
            <div className="bg-neutral-primary-soft block max-w-sm hover:shadow-2xl hover:translate-y-0.5 duration-500 border-0 rounded-xl shadow-xs">
              <a href="#">
                <img
                  className="rounded-t-base hover:scale-125 duration-500"
                  
                  
                />
              </a>
              <div className="">
                <h2 className="text-xl border-0 rounded-5 text-center p-2 font-semibold">
                  title
                </h2>
                <p className="p-2 text-orange-600">$price</p>
                <p className="p-2.5"> description</p>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
}
