import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../Item/Item.css";

function Item({ item }) {
    return (
        <Link to={'/item/' + item.id}>
            <Card style={{ width: '15rem' }} className="cardcontainer">
                <Card.Img variant="top" src={item.Img} alt={item.Title} className="ImagenItem"/>
                <Card.Body className="textCard">
                    <Card.Text className="text-center">
                        {item.Title}
                        {item.Description}
                        {item.Price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Item;