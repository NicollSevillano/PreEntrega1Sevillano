import React from "react";
import "./StyleNavBar.css"; 

export const CartWidget = () => {
    return(
        <div> 
            <ion-icon className="ioncart ion-cart" name="ion-cart cart-outline"></ion-icon> 
            <span className="notificacion">1</span>
        </div>
    );
}

export default CartWidget;