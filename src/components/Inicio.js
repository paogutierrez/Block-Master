import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  
} from "react-bootstrap";
import '../styles/InicioStyles.css'
import { Link } from 'react-router-dom'


const Inicio = () => {

  
  return (
    <div className="contenedor">
      <Navbar expand="lg">
        <Container fluid  >
          <Navbar.Brand href="#">
            <img className="logo"
              src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644439152/logo-blockBuster_dski2l.png"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="scroll"/>
          <Navbar.Collapse id="navbarScroll" className="scroll">
            <Nav
              className="me-auto my-2 my-lg-0 scroll"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="eleccion" href="/Cards">Todas</Nav.Link>
              <Nav.Link className="eleccion" href="/Mas Valoradas">Mas Valoradas</Nav.Link>
              <Nav.Link className="eleccion" href="/Menos Valoradas">Menos Valoradas</Nav.Link>
              <Nav.Link className="eleccion" href="/Favoritos">Favoritos</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                className="busqueda"
                type="search"
                placeholder="Busca tu pelicula favorita"
                aria-label="Search"
              />
              <Button className="lupa">Buscar</Button>
              <Link  className="logout"to="/Login">Logout</Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Inicio;
