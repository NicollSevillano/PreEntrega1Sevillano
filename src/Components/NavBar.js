import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemListContainer";
import "./StyleNavBar.css";
import luli from "./assets/img/luli.png";
import CartWidget from "./CartWidget";

function NavBar(){
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
                                <NavDropdown.Item href="#action3">PRE-VENTA</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">DC</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">MARVEL</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Mangas</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Hot Toys</NavDropdown.Item>
                                <NavDropdown.Item href="#action8">Harry Potter</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Funkos</NavDropdown.Item>
                                <NavDropdown.Item href="#action10">Posters/postales</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link className="navBarCentro" href="#action2">¿Quienes somos?</Nav.Link>
                        <Nav.Link className="navBarCentro" href="#action3">Contacto</Nav.Link>
                        </Nav>
                        <Nav.Link href="#action4">
                            <div className="ion-cart"> 
                                <CartWidget/>
                            </div>
                        </Nav.Link>
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