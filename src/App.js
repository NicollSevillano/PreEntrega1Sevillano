import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import CartProvider from "./Components/Context/CartContext";
import Cart from "./Components/Cart/Cart";
import Error from "./Components/Error/Error";
import { ToastContainer } from "react-toastify";
import Checkout from "./Components/Checkout/Checkout"

function App() {
  return (
    <BrowserRouter >
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:CategoryID"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error/>}/>
          <Route path={"/checkout"} element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
