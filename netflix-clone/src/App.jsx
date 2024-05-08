import './App.css'
import Home from "./pages/Home/Home.jsx"
import { Route, Routes } from "react-router-dom";
import Four04 from "../src/Components/404/Four04.jsx"
import TvShows from "../src/Components/TvShows/TvShows.jsx";
import SharedLayout from './Components/SharedLayout/SharedLayout.jsx';

function App() {

  return (
    <>
    
    <Routes>
        <Route path="/" element={<SharedLayout/>}>
        < Route path="TvShows" element={<TvShows/>}/>
        < Route path="/" element={<Home/>}/> 
        < Route path="Movies" element={<Four04/>}/> 
        < Route path="New_Popular" element={<Four04/>}/> 
        < Route path="My_List" element={<Four04/>}/> 
        < Route path="Browse_by_Language" element={<Four04/>}/> 
        <Route path="*" element={<Four04/>}/>  
        </Route>
        </Routes>
    </>
  )
}

export default App
