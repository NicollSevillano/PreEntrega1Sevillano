import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./StyleNavBar.css";
import luli from "./assets/img/luli.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./Item/ItemDetailContainer";

function NavBar() {
    return (
        <div className="container" id="navbar">
            <div className="row">
                <div className="col-6">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={luli} alt="tecno" width={100} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navStyle navbar-nav">
                                    <li className="navStyle li nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/dc"}>DC</NavLink>
                                    </li>
                                    <li className="navStyle li nav-item">
                                        <NavLink className="nav-link" to={"/category/marvel"}>MARVEL</NavLink>
                                    </li>
                                    <li className="navStyle li nav-item">
                                        <NavLink className="nav-link" to={"/category/mangas"}>Mangas</NavLink>
                                    </li>
                                    <li className="navStyle li nav-item">
                                        <NavLink className="nav-link" to={"/category/hp"}>Harry Potter</NavLink>
                                    </li>
                                    <li className="navStyle li nav-item">
                                        <NavLink className="nav-link" to={"/category/hottoys"}>Toys</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-6 d-flex justify-content-end  align-items-center">
                    <div className="ion-cart">
                        <CartWidget />
                    </div>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </div>
            </div>
            <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            </Routes>
        </div>
    )
}

export default NavBar;