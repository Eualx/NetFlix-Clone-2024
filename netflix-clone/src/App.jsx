import './App.css'
import Home from "./pages/Home/Home.jsx"
import { Route, Routes, useNavigate } from "react-router-dom";
import Four04 from "../src/Components/404/Four04.jsx"
import TvShows from "../src/Components/TvShows/TvShows.jsx";
import SharedLayout from './Components/SharedLayout/SharedLayout.jsx';
import Login from './Components/LoginPage/Login.jsx'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import {auth} from './Firebase/FirBaseL.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewPopular from './Components/NewPopular/NewPopular.jsx';
import MyList from './Components/MyList/MyList.jsx'
import BrowseByLanguage from './Components/MyList/MyList.jsx'

function App() {
  const navigate =useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth , async(user)=>{
      if(user){
        console.log("Logged In")
        navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  }
)

  return (
    <>
  {/* <Home /> */}
  <ToastContainer theme='dark' />
    <Routes>
        <Route path="/" element={<SharedLayout/>}>
        < Route path="tvShows" element={<TvShows/>}/>
        < Route path="/" element={<Home/>}/>  
        < Route path="movies" element={<Movies />}/>
        < Route path="new_Popular" element={<NewPopular/>}/> 
        < Route path="my_List" element={<MyList />}/> 
        < Route path="browse_by_Language" element={<BrowseByLanguage />}/> 
        <Route path="*" element={<Four04/>}/>   
        <Route path='login' element={<Login/>}/>
        </Route>
        </Routes> 
    </>
  )
}

export default App
