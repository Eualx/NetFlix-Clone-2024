import React from 'react'
import Row from '../Rows/Row/Row'
import requests from "../../Utils/Request"

const RowList = () => {
  return (
    <>
<Row title="Tvshow" fetchurl={requests.fetchTvShow} />
    </>
  )
}

export default RowList