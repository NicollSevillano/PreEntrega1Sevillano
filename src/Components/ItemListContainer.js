import React from "react";
import "./StyleNavBar.css";

export const ItemListContainer = ({greeting})=> {
    return(
        <div>
            <p>
                {greeting}
            </p> 
        </div>
    );
}

export default ItemListContainer;