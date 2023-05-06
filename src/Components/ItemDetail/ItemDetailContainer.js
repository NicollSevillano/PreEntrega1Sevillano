import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, collection } from "firebase/firestore"
import db from "../Firebase/Firebase";

const ItemDetailContainer = () => {
    const [data, setData] = useState('');
    const {id} = useParams();
    useEffect(() => {
        const list = collection(db, 'Items');
        const queryDoc = doc(list, id);
        
        getDoc(queryDoc)
        .then(
            content =>{
                const lista = {
                    id: content.id, ...content.data()
                }
                setData(lista);
            }
        )
        .catch((error) =>{
            console.log(error);
        });console.log(data);
    },[id]);
    return (
        <ItemDetail item={data}/>
    );
}

export default ItemDetailContainer;