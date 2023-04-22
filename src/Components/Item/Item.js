import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../css/Item.css";

function Item({ item }) {
    return (
        <Link to={'/item/' + item.id}>
            <Card style={{ width: '15rem' }} className="card container">
                <Card.Img variant="top" src={item.Img} alt={item.Title} className="ImagenItem"/>
                <Card.Body>
                    <Card.Text className="text-center">
                        {item.Title}<br/>
                        {item.Description}<br/>
                        {item.Price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Item;