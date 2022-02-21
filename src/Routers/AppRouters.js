import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Busqueda from '../components/Busqueda';
import Inicio from '../components/Inicio';
import Login from '../components/Login';
import Slider from '../components/Slider';
import Registro from '../components/Registro';
import { Cards } from '../components/Cards';
import { Favoritos } from '../components/Favoritos';


const AppRoutes = () => {
  return (
      <div>
        <Router >
            <Inicio />
            <Slider />
                <Routes >
                <Route path="/Busqueda" element={<Busqueda  />} />
                <Route path="/Login" element={<Login  />} />
                <Route path="/Registro" element={<Registro  />} />
                <Route path="/Cards" element={<Cards  />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                
                </Routes>
        </Router>
      </div>

  )
};

export default AppRoutes;