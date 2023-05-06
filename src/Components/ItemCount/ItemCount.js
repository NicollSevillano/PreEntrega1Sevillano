import React from "react";
import { useState,useContext, useEffect } from "react";
import "../ItemCount/ItemCount.css";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

const ItemCount = ({items}) => {
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(items.Stock);
    const {addItem} = useContext(CartContext);

    const agregar = () => { setContador(contador + 1)
        console.log(contador)
        console.log(stock);
    };
    const quitar = () => { setContador(contador - 1) }
    const onAdd = () => {
        setStock(stock - contador);
        setContador(0);
        console.log(items);
    }
    useEffect(() =>{
        setStock(items.Stock);
    }, [items.Stock])
    
    return (
        <div className="container">
            <div className="contenedorCantidad">
                <div className="contador">
                    <span>{contador}</span>
                </div>
                <div className="btn-grupo">
                    <button className="boton" disabled={contador < 1} onClick={quitar}>-</button>
                    <button className="boton" disabled={contador >= stock} onClick={agregar}>+</button>
                </div>
                <div className="">
                    <Button className="botonCount" onClick={() => {onAdd(); addItem(items,contador) }}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )

}

export default ItemCount;