import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../productos.json";

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id == id))
            },2000);
        })
        promise.then((prod) => {
            setItem(prod);
        })
    },[id]);
    return (
        <ItemDetail item={item}/>
    );
}

export default ItemDetailContainer;