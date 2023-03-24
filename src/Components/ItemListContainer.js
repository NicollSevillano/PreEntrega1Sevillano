import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "./productos.json";
import  ItemList from '../Components/Item/ItemList';

const ItemListContainer = ()=> {
    const [item, setItem] = useState([]);
    const {id} = useParams ();
    useEffect (() => {
        const promise = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000)
        })

        promise.then((prod) => {
            setItem(prod)
        })
    },[id]);

    return(
        <div>
            <ItemList item={item}/>
        </div>
    );
}

export default ItemListContainer;