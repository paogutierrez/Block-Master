/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { urlPeliculas } from "../helpers/urlPeliculas";
import "../styles/cardStyles.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Swal from 'sweetalert2'

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);


  const traerCards = async () => {
    const data = await fetch(urlPeliculas + page).then((resp) => resp.json());
    setCards((prevCards) => prevCards.concat(data.results));

  };
  
  
  const descripcionPeliculas = (id) => {
    cards.filter((mostrar) => (mostrar.id === id))
  };

  useEffect(() => {
    traerCards();
  }, [page]);

  return (
    <div>
      <h1 class="titulo">Todas las peliculas</h1>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={true}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<h4>Loading...</h4>}
      >
        {cards.map((movie) => (
          <Card key={movie.id} className="card" style={{ width: "18rem" }} onClick={() =>descripcionPeliculas(
            Swal.fire({
              title: `${movie.title}`,
              text: `${movie.overview}`,
              imageUrl: `${`https://image.tmdb.org/t/p/w1280` + movie.backdrop_path}`,
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: `${movie.title}`
            })
          )}>
            <Card.Img
              className="tarjeta"
              variant="top"
              src={`https://image.tmdb.org/t/p/w1280` + movie.poster_path}
            />
            <Card.Body>
              <Card.Title className="titulo">{movie.title}</Card.Title>
              <div className="containerAverage">
                <span>
                    <img src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1644877322/Vector_w3jao3.svg" alt="puntuacion"></img>
                    {movie.vote_average}</span>
              </div>

            </Card.Body>
          </Card>
        ))}
      </InfiniteScroll>
    </div>
  );
};
