import React from 'react'
import Row from '../../Rows/Row/Row'
import requests from "../../../Utils/Request"

const MoviesRowList = () => {
  return (
    <>
<Row title="Top rate" fetchurl={requests.fetchTopRatedmovie} />
<Row title="Action" fetchurl={requests.fetchActionMovies} />
<Row title="Comedy" fetchurl={requests.fetchComedyMovies} />
<Row title="Horror" fetchurl={requests.fetchHorrorMovies} />
<Row title="Romance" fetchurl={requests.fetchRomanceMovies}/>
    </>
  )
}

export default MoviesRowList