import { CartContext } from "./Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { Card } from "react-bootstrap";

export default function Cart() {
    const { items } = useContext(CartContext);
    return (
        <div>
            {items.length === 0 ?
                <Card className="text-center">
                    <Card.Header>Hola! Lamentamos decirte que</Card.Header>
                    <Card.Body>
                        <Card.Title>Tu carrito está vacío</Card.Title>
                        <Card.Text>
                            Agrega articulos por favor
                        </Card.Text>
                        <button variant="primary"><Link className="link" to={"/"}>Continuar comprando</Link></button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Gracias por elegirnos c: </Card.Footer>
                </Card>
                :
                items.map(producto => {
                    <ItemCart productos={producto} />
                }
                )
            }
        </div>
    )
}