import React from "react";
import Item from "./Item";

const ItemList = ({item}) => {
    return(
        <div className="iList">
            {
                item.map(item => 
                    <div key={item.id}>
                        <Item item={item}/>
                    </div>
                )
            }
        </div>
    )
}

export default ItemList;