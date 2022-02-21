import React, { useEffect, useState} from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { urlPeliculas } from '../helpers/urlPeliculas'
import '../styles/sliderStyles.css'


const Slider = () => {

 
  const [sliderPeliculas, setSliderPeliculas] = useState ([]);

  async function traerSlider(){
    const datos = await fetch (urlPeliculas)
    .then(resp => resp.json()
    )
    setSliderPeliculas(datos.results.sort(()=> Math.random()> 0.50 ? 1 : -1).slice(0.5));
  }

  useEffect(() => {
    traerSlider()
  }, [])


  return (
    <div>
<Carousel fade>

  {
    sliderPeliculas.map(movie =>(
    
    <Carousel.Item className="sinFondo2" interval={1000} key={movie.id}>
    <img
      className="d-block w-100  altura"
      src={`https://image.tmdb.org/t/p/w1280` + movie.backdrop_path}
      alt={movie.tittle}
    />
        <Carousel.Caption className="sinFondo">
        <Button  variant onClick={() => console.log(movie, 'saasd')}className="verA"> →  Ver Ahora</Button>
        <Button  variant className="verD"> + Ver despues</Button>
        </Carousel.Caption>
  </Carousel.Item>
    ))
  }

</Carousel>
    </div>
  )
}

export default Slider