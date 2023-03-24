import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Item({ item }) {
    return (
        <Link to={'/item/' + item.id}>
            <Card style={{ width: '15rem' }} className="card container">
                <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                <Card.Body>
                    <Card.Text className="text-center">
                        {item.nombre}<br/>
                        {item.tomo}<br/>
                        {item.precio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Item;