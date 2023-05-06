import { BsTrash } from "react-icons/bs"
import Card from 'react-bootstrap/Card';
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import "./ItemCart.css";

function ItemCart ({productos, refrescate}) {
    const {removeItem} = useContext(CartContext);
    return(
        <Card style={{ width: '30rem' }}>
        <Card.Body className="contenedorItemCart">
            <Card.Title>{productos.Title}</Card.Title>
            <Card.Text className="ItemCart">
                <span>Cantidad: {productos.Stock}</span>
                <span>Precio unitario: ${productos.Price}</span>
                <span>Total: ${productos.Price * productos.Stock}</span>
                <button onClick={() => {removeItem(productos.id)}}><BsTrash/></button>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}
export default ItemCart;