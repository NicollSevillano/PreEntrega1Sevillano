import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail ({item}){
    return(
        <div>
            <div>
                <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                <h1>{item.nombre}</h1>
                <p>{item.tomo}</p>
                <p>{item.precio}</p>
                <p>{item.stock}</p>
            </div>
            
            <div>
                    <ItemCount cantidadItems={10} />
                </div>
        </div>
    )
}

export default ItemDetail;