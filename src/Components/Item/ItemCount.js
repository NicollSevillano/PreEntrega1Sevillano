import React from "react";
import { useState,useContext } from "react";
import "../css/ItemCount.css";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

const ItemCount = ({items}) => {
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(items.quantity);
    const agregar = () => { setContador(contador + 1)
        console.log(contador)};
    const quitar = () => {
        if (contador >= 1) { setContador(contador - 1) }
    }
    const {addItem} = useContext(CartContext);
    const onAdd = () => {
        setStock(stock - contador);
        setContador(0);
        console.log(stock);
    }
    
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
                    <Button onClick={() => {addItem(items,contador); onAdd()}}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
    )

}

export default ItemCount;