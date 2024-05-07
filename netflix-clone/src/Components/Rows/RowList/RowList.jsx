import React from 'react'
import Row from '../Row/Row'
import requests from "../../../Utils/Request"

const RowList = () => {
  return (
    <>
<Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetFlixorginals}isLargeRow={true}/>
<Row title="Trending" fetchurl={requests.fetchtrending} />
<Row title="Top rate" fetchurl={requests.fetchTopRatedmovie} />
<Row title="Action" fetchurl={requests.fetchActionMovies} />
<Row title="Comedy" fetchurl={requests.fetchComedyMovies} />
<Row title="Horror" fetchurl={requests.fetchHorrorMovies} />
<Row title="Romance" fetchurl={requests.fetchRomanceMovies}/>
<Row title="Documentries" fetchurl={requests.fetchDocumentaries} />
<Row title="Tvshow" fetchurl={requests.fetchTvShow} />
    </>
  )
}

export default RowList