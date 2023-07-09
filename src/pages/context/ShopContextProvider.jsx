// import {React, useState, createContext} from 'react'
// import {list} from '../../assets/data.js'

// export const ShopContext = createContext(null)


// const getDefaultCart = () =>{
//     let cart = {};
//     for (let i = 1; i< list.length + 1; i++){
//         cart[i] = 0;
//     }
//     return cart;
// }



// function ShopContextProvider(props) {
//     const [cartItems, setCartItems] = useState()

//     const addToCart = (itemId) =>{
//         setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
//     }
    
//     const removeFromCart = (itemId) =>{
//         setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
//     }

//     const contextValue = {cartItems, addToCart, removeFromCart}
//   return (
//     <ShopContext.Provider value={contextValue}></ShopContext.Provider>
//   )
// }

// export default ShopContextProvider;