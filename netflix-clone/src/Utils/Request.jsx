// const API_KEY=process.env.REACT_APP_API_KEY
// const API_KEY=process.env.REACT_APP_API_KEY
const API_KEY="7c85b582aa71079ffc79640d7a4d3736"
const requests={
    fetchtrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixorginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedmovie:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow:`/tv/popular?api_key=${API_KEY}&anguage=en-US&page=1`
}
export default requests;

     