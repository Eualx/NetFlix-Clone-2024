import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Four04 from "../src/Components/404/Four04.jsx";
import TvShows from "../src/Components/TvShows/TvShows.jsx";
import SharedLayout from "./Components/SharedLayout/SharedLayout.jsx";
import Login from "./Components/LoginPage/Login.jsx";
import NewPopular from "./Components/NewPopular/NewPopular.jsx";
import MyList from "./Components/MyList/MyList.jsx";
import Movies from "./Components/Mov/Movies.jsx";
import Browse from "./Components/Browse/Browse.jsx";
import SignUp from './Components/SignUppage/SignUp.jsx';

function App() {

  return (
    <>
     
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="tvShows" element={<TvShows />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new_Popular" element={<NewPopular />} />
          <Route path="my_List" element={<MyList />} />
          <Route path="browse_by_Language" element={<Browse />} />
        </Route>
        <Route path="*" element={<Four04 />} />
        <Route path="login" element={<Login />} />
        <Route path='getstarted' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
