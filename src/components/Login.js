import React from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import "../styles/loginStyles.css";
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import {  loginGoogleAsincrono, loginEmailPassword} from '../actions/actionLogin'



const Login = () => {


  const dispatch = useDispatch();

  const [values, handleInputChange ] = useForm({
    email:'',
    password:''
  })

 const {email, password} = values;

 const handleLogin = (e) => {
   e.preventDefault();
   dispatch(loginEmailPassword(email,password));
 }

 const handleGoogle = () => {
   dispatch(loginGoogleAsincrono())
 }
 

  return (
    <div className="container1">
      <Image
        className="logo1"
        variant="top"
        src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644439152/logo-blockBuster_dski2l.png"
      />
      <Form className="formulario" onSubmit={handleLogin}>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label className="color">Correo Electronico</Form.Label>
          <Form.Control
            className="input1"
            type="email"
            placeholder="Ingrese su e-mail"
            name='email'
            value={email}
            onChange={handleInputChange}
           
            
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label className="color">Contraseña</Form.Label>
          <Form.Control
            className="input1"
            type="password"
            placeholder="Ingrese su contraseña"
            name='password'
            value={password}
            onChange={handleInputChange}
            
            
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p className="color">¿Aun no estas registrado? </p>
          <a className="color1" href="/Registro">
            Registrate
          </a>
        </Form.Group>

        <Container className="auth__social-networks">
          <Container className="google-btn" onClick={() =>handleGoogle()}>
            <Container className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </Container>
          </Container>
        </Container>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
