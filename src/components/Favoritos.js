/* eslint-disable no-const-assign */
import React, { useEffect } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { fileUpload, } from "../helpers/FileUpload"
import {listFavoritos, registerFavoritos} from "../actions/actionFavoritos"
import { ListarFavoritos } from "./ListarFavoritos";
import '../styles/favoritosStyle.css'

export const Favoritos = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    name: "",
    category: "",
    img: "",
  });

  let { name, category, img} = values;

  const handleRegistro =  e => {
      console.log(values)
      e.preventDefault();
      dispatch(registerFavoritos(name, category, img))
      reset()
  }
  
  const handleFileChanged =  e => {
      const file = e.target.files[0];
      fileUpload(file)
      .then(response => {
        img = response
          console.log(response)
      })
      .catch(error =>{
          console.log(error.message)
      })
  }

  useEffect(() => {
      dispatch(listFavoritos())
      console.log()
  }, [])

  return (
    <div >
      
      <Form className="contenedorFavoritos" onSubmit={handleRegistro}>
      <Image
        className="logo2"
        variant="top"
        src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644439152/logo-blockBuster_dski2l.png"
      />
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label className="label">Category</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder=""
            name="category"
            value={category}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control 
          className="input"
          type="text"
          placeholder=""  
          name="name"
          value={name}
          onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label className="label">Movie</Form.Label>
          <Form.Control
          className="input"
            id="fileSelector"
            type="file"
            name="file"
            value={img}
            onChange={handleFileChanged}
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" className="btnSubmit">
          Submit
        </Button>
      </Form>
      <ListarFavoritos />
    </div>
  );
};
