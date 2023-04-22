import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StyleNavBar.css";
import luli from "./assets/img/luli.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

function NavBar(){
    const { itemQuantity } = useContext(CartContext);
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid className="style-nav">
                    <Navbar.Brand href="#"><img className="imgNav" src={luli}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="navBarCentro" href="#action1">Inicio</Nav.Link>
                            <NavDropdown className="items" title="Productos" id="navbarScrollingDropdown">
                                <Link className="link" to={"/"}>Todos</Link><br/>
                                <Link className="link" to={"/category/MARVEL"}>MARVEL</Link><br/>
                                <Link className="link" to={"/category/DC"}>DC</Link><br/>
                                <Link className="link" to={"/category/Mangas"}>Mangas</Link><br/>
                                <Link className="link" to={"/category/Hottoys"}>Toys</Link><br/>
                                <Link className="link" to={"/category/HarryPotter"}>Harry Potter</Link><br/>
                                <Link className="link" to={"/category/Funkos"}>Funkos</Link>
                            </NavDropdown>
                        <Nav.Link className="navBarCentro" href="#action2">¿Quienes somos?</Nav.Link>
                        <Nav.Link className="navBarCentro" >Contacto</Nav.Link>
                        </Nav>
                        <Link to="/cart">
                            <div className="ion-cart">
                                <CartWidget/>
                            </div>
                        </Link>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                                />
                            <Button className="btnBuscar" variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;