import React from 'react'
import Row from '../Row/Row'
import requests from "../../../Utils/Request"

const RowList = () => {
  return (
    <>
<Row title="NETFLIX ORIGINALS"
fetchurl={requests.fetchNetFlixorginals}
isLargeRow={true}/>
<Row title="NETFLIX TRENDING"
fetchurl={requests.fetchtrending} />
<Row title="NETFLIX TOPRATE"
fetchurl={requests.fetchTopRatedmovie}
isLargeRow={true}/>
<Row title="NETFLIX ACTION"
fetchurl={requests.fetchActionMovies} />
<Row title="NETFLIX COMEDY"
fetchurl={requests.fetchComedyMovies}
isLargeRow={true}/>
<Row title="NETFLIX HORROR"
fetchurl={requests.fetchHorrorMovies} />
<Row title="NETFLIX ROMANCE"
fetchurl={requests.fetchRomanceMovies}
isLargeRow={true}/>
<Row title="NETFLIX DOCUMENTARIES"
fetchurl={requests.fetchDocumentaries} />
<Row title="NETFLIX TvSHOW"
fetchurl={requests.fetchTvShow}
isLargeRow={true}/>
    </>
  )
}

export default RowList