import React, { useEffect,useState } from 'react'
import axios from "../../Utils/Axios"
import requests from '../../Utils/Request'
import "../Banner/Banner.css"

const Banner = () => {

    const [movie, setMovie]=useState({})
useEffect(()=>{
    (async()=>{
try{
    const request=await axios.get(requests.fetchNetFlixorginals)
    console.log(request)
     setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]
  )
} catch(error){
    console.log("error",error)
}
})()
},[]
)
  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundposition:"center",
        backgroundRepeat:"no-repeat"
    }} >
    

<div className='banner_contents'></div>
<h1 className='banner_title'>
{movie?.title|| movie?.name|| movie?.original_name}
</h1>
<div className='banner_buttons'>
    <button className='banner_button play'>play</button>
    <button className='banner_button'>My List</button>
</div>
{/* <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1> */}

<div className='banner_fadeBottom'/>
    </div>
  
  )
}

export default Banner
