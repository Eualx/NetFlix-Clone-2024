import React, { useEffect,useState } from 'react'
import "../Row/Row.css"
import axios from '../../../Utils/Axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
const Row = ({title,fetchurl,isLargeRow}) => {
   
        const [movies,setMovie]=useState([])
        const [trailerurl,setTrailerurl]=useState("")
        const base_url="https://image.tmdb.org/t/p/original";
        useEffect(()=>{ 
            (async ()=>{
                try{
            console.log(fetchurl)
            const request= await axios.get(fetchurl)
            console.log(request)
            setMovie(request.data.results)
        } catch(error){
            console.log("error",error)
        }
        })()
        },[fetchurl]
        )
        // console.log(movies)
const handleClick=(movie)=>{
if (trailerurl){
    setTrailerurl("")
} else {
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
    .then((url)=> {
        console.log(url)
        const urlparams= new URLSearchParams(new URL(url).search)
        console.log(urlparams)
        console.log(urlparams.get('v'))
        setTrailerurl(urlparams.get('v'))
    } )
}}
// ?@ It takes a movie object as a parameter. It checks if trailerurl (presumably a state variable) is truthy. If it is, it sets trailerurl to an empty string.If trailerurl is falsy, it calls the movieTrailer function, passing either movie.title, movie.name, or movie.original_name as an argument. This function presumably fetches a trailer URL based on the movie's title, name, or original name. When the promise returned by movieTrailer resolves, it extracts the video ID from the URL using URLSearchParams, and sets the trailerurl state variable to this video ID.Finally, it seems to handle the trailer URL in some way, perhaps displaying it in the UI or using it for some other purpose.
        const opts={
            height:"390",
            width:"100%",
            playerVars:{
                 autoplay:1,
            }
        } 

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>  
            {movies?.map((movie,index)=>(
<img onClick={()=>handleClick(movie)} key={index} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
            )
            )
            }

        </div>
<div style={{padding:'0px'}}>{
    trailerurl && <YouTube videoId={trailerurl} opts={opts}/>
}
</div>

    </div>
  )
}

export default Row