import React, { createContext, useEffect, useState } from 'react'

export let MyGlobalContext =createContext()

export default function MainContextFile({children}) {
    let [cartCount, setCartCount] =useState(
        localStorage.getItem("CART")
        ?
        JSON.parse(localStorage.getItem("CART"))
        :
        [])

        // let [wishList, setWishList] =useState(
        // localStorage.getItem("WISH")
        // ?
        // JSON.parse(localStorage.getItem("WISH"))
        // :
        // [])
    let obj={cartCount, setCartCount}

    useEffect(()=>{
        localStorage.setItem("CART", JSON.stringify(cartCount))
    },[cartCount])
    // useEffect(()=>{
    //     localStorage.setItem("WISH", JSON.stringify(wishList))
    // },[wishList])
  return (
    <MyGlobalContext.Provider value={obj}>
      {children}
    </MyGlobalContext.Provider>
  )
}
