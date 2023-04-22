import React from "react";
import Item from "../Item/Item";
import "../css/ItemList.css";

function ItemList({data}) {
    return(
        <div className="ItemList">
            {
                data.map(x => <Item key={x.id} item={x}/>)
            }
        </div>
    )
}

export default ItemList;