import React from "react";
import "./StyleNavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "./Context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
    const { itemQuantity } = useContext(CartContext);

    return (
            <div>
                <AiOutlineShoppingCart />
                {itemQuantity() || ''}
            </div>
    );
}

export default CartWidget;