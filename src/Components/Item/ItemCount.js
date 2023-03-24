import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

const ItemCount = (cantidadItems) =>{
    const [contador, setContador] = useState(0);
    const [cantidad, setCantidad] = useState(cantidadItems);
    
    const agregar = () =>{
        setContador(contador + 1);
    };
    const quitar = () => {
        setContador(contador - 1);
    }
    const onAdd = () => {
        setCantidad(cantidad - contador);
    }
    return(
        <div className="container">
            <div className="">
                <div className="">
                    <div className="btn-grupo">
                        <button type="button" className="btn btn-outline-primary" onClick={agregar}>+</button>
                        <span>{contador}</span>
                        <button type="button" className="btn btn-outline-primary" onClick={quitar}>-</button>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
    
}

export default ItemCount;