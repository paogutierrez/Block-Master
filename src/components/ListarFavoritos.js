import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector} from 'react-redux'
import { useDispatch} from 'react-redux'
import { deleteFavoritos } from '../actions/actionFavoritos'
import '../styles/listarFavoritosStyles.css'

export const ListarFavoritos = () => {

  const dispatch = useDispatch();

    const { favoritos } = useSelector(store => store.favoritos);
    console.log(favoritos)
    
  return (
    <div>
        <h1>Tus peliculas favoritas</h1>
        <Table striped bordered hover variant="dark" className="tabla">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Name</th>
      <th>Categoria</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      (favoritos) ?
      (
        favoritos.map((element, index)=>(
          <tr key={index}>
            <td><img src={element.img} alt=""  width="50px"></img></td>
            <td>{element.name}</td>
            <td>{element.category}</td>

            <td>
              <button  onClick={() => dispatch(deleteFavoritos(element.name))}className="eliminarButton">Eliminar</button>
            </td>
          </tr>
        ))
      ):
      <p>Datos no disponibles</p>
    }
  </tbody>
</Table>
    </div>
  )
}

