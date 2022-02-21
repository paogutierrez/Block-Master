import React from "react";
import { Button, Col, Form, Row, Image, Container } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import "../styles/registroStyles.css";
import { registroEmailPasswordNombre } from "../actions/actionRegistro";

const Registro = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "Paola",
    email: "paola@gmail.com",
    pass1: "123456789",
    pass2: "123456789",
  });

  const { name, email, pass1, pass2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registroEmailPasswordNombre(email, pass1, name));
  };

  return (
    <div className="container1">
      <Image
        className="logo2"
        variant="top"
        src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644439152/logo-blockBuster_dski2l.png"
      />
      <Form className="formulario" onSubmit={handleRegistro}>
        <Form.Group as={Row} className="mb-3" controlId="formBasicName">
          <Form.Label className="color" column sm={2}>
            Nombre
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label className="color" column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          s
          className="mb-3 py-2"
          controlId="formHorizontalPassword"
        >
          <Form.Label className="color" column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className="mb-4 py-2"
              type="password"
              placeholder="Password"
              name="pass1"
              value={pass1}
              onChange={handleInputChange}
            />
          </Col>

          <Form.Label className="color" column sm={2}>
            Repeat Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className="mb-4 py-2"
              type="password"
              placeholder="Password"
              name="pass2"
              value={pass2}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="botonGoogle" type="submit">
              <Container className="auth__social-networks">
                <Container className="google-btn">
                  <Container className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="google button"
                    />
                  </Container>
                </Container>
              </Container>
              Registrarse con Google
            </Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Registrarse</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Registro;
