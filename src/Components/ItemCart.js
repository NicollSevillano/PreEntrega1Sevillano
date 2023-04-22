import { BsTrash } from "react-icons/bs"
import Card from 'react-bootstrap/Card';
import { CartContext } from "./Context/CartContext";
import { useContext } from "react";

export default function ItemCart (productos) {
    const {removeItem} = useContext(CartContext);
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{productos.Title}</Card.Title>
            <Card.Text>
                <p>Cantidad: {productos.Stock}</p>
                <p>Precio unitario: ${productos.Price}</p>
                <p>Total: ${productos.Price * productos.Stock}</p>
                <button onClick={removeItem(productos.id)}><BsTrash/></button>
            </Card.Text>
        </Card.Body>
    </Card>
    )
}
