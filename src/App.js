import React from "react";
import {BrowserRouter} from "react-router-dom"
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";
import CartProvider from "./Components/Context/CartContext";
import Cart from "./Components/Cart";

function App() {
  return (
      <BrowserRouter >
        <CartProvider>
          <NavBar/>
          <Routes>
              <Route path={"/"} element={<ItemListContainer/>} />
              <Route path={"/category/:CategoryID"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/cart"} element={<Cart/>}/>
              <Route></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
