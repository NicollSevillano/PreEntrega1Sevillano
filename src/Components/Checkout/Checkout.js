import React, { useContext } from "react";
import Toastify from 'toastify-js'
import { CartContext } from "../Context/CartContext"
import { collection, addDoc } from "firebase/firestore";
import db from "../Firebase/Firebase";
import "../Checkout/Checkout.css";
import "toastify-js/src/toastify.css"

const Checkout = () => {
    const { items, totalPrice, clear } = useContext(CartContext);
    const Compra = () => {
        return [...items.map((item) => {
            return { id: item.id, Title: item.Title, Price: item.Price, Stock: item.Stock }
        })];
    }
    const enviarOrden = async () => {
        let date = new Date();
        const compras = {
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            compra: {
                nombre: document.getElementById("nombre").value,
                dni: document.getElementById("dni").value,
                email: document.getElementById("email").value,
                celular: document.getElementById("celular").value
            },
            items: Compra(),
            total: totalPrice()
        }
        const orderCollection = await addDoc(collection(db, "Ordenes"), compras);
        Toastify({
            text: `Su orden de compra se ha realizado con éxito, su N° es: ${orderCollection.id}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
    return (
        <div >
            <form className="Contenedor">
                <input type="text" id="nombre" placeholder="Nombre" />
                <input type="email" id="email" placeholder="Email" />
                <input type="text" id="dni" placeholder="DNI" />
                <input type="text" id="celular" placeholder="Celular" />
            </form>
            <button onClick={() => { enviarOrden() }}>Finalizar compra</button>
        </div>
    )
}
export default Checkout;