import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { Card } from "react-bootstrap";
import "./CartContainer.css";

function Cart() {
    const { items, totalPrice, clear, itemQuantity } = useContext(CartContext);
    const refrescar = () => {
        return (
            (itemQuantity() == 0) ?
                <div className="contenedorCartContainer">
                    <Card className="text-center">
                        <Card.Header>Hola! Lamentamos decirte que</Card.Header>
                        <Card.Body>
                            <Card.Title>Tu carrito está vacío</Card.Title>
                            <Card.Text>
                                Agrega articulos por favor
                            </Card.Text>
                            <button variant="primary" className="botonCartContainer"><Link className="linkBoton" to={"/"}>Continuar comprando</Link></button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Gracias por elegirnos c: </Card.Footer>
                    </Card>
                </div>
                :
                <>
                    <div className="contenedorCartContainer">
                        {items.map(producto => {
                            return (
                                <ItemCart productos={producto} key={producto.id} refrescate={refrescar} />
                            )
                        })}
                        <div className="cartContenedor">
                            <p className="palabraCartContainer">Resumen de la cuenta: ${totalPrice()}</p>
                            <div className="botonesCartContainer">
                                <button onClick={() => { clear() }}>Vaciar carrito</button>
                                <button><Link to={'/checkout'}>Finalizar compra</Link></button>
                            </div>
                        </div>
                    </div>
                </>
        )
    }
    return (
        <div>
            <div>
                {refrescar()}
            </div>
        </div>
    )
}
export default Cart;