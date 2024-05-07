import React from 'react'
import Row from '../../Components/Rows/Row/Row'
import requests from "../../Utils/Request"
const TvShows = () => {
  return (
    <div>
<Row fetchurl={requests.fetchTvShow} />

    </div>
  )
}

export default TvShows