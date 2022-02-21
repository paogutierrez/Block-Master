import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/busquedaStyles.css'


const Busqueda = () => {
  return (
    <Card style={{ width: '23rem' }} className="resultado">
  <Card.Img variant="top" src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644472742/Stuck_at_Home_Searching_vtwgin.png" />
  <Card.Body>
    <Card.Title className="tarjeta">Upps!</Card.Title>
    <Card.Text className="tarjeta">
      No se encontraron resultados
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default Busqueda