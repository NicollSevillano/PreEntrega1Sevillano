import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../Components/Item/ItemList';
import { getFirestore, collection, getDocs, query, where, doc } from "firebase/firestore";
import db from "./Firebase/Firebase";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { CategoryID } = useParams();
    useEffect(() => {
        const list = collection(db, 'Items');
        const queryFilter = query(list, where('CategoryID', '==', `${CategoryID}`)) ;
        const product = CategoryID ? queryFilter : list;
        getDocs(product)
        .then(
            content =>{
                if(content.size === 0){console.log("error")}
                const lista = content.docs.map(doc =>{
                    return{
                        id: doc.id, ...doc.data()
                    }
                })
                setData(lista);
            }
        )
            .catch(error => {
                console.log(error);
            }); console.log(data);
    }, [CategoryID]);

    return (
        <div>
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;