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
function truncate(str,n){
return str?.length> n ? str.substr(0,n-1)+'...':str;
}
  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundposition:"center",
        backgroundRepeat:"no-repeat",
        width:"100%"
    }} >
    

<div className='banner_contents'></div>
<h1 className='banner_title'>
{movie?.title|| movie?.name|| movie?.original_name}
</h1>
<div className='banner_buttons'>
    <button className='banner_button play'>play</button>
    <button className='banner_button'>My List</button>
</div>
<h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>

<div className='banner_fadeBottom'/>
    </div>
  
  )
}

export default Banner
