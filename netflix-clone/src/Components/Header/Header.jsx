import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/image/NetflixLogo.png";
import Avatarlogo from "../../assets/image/NetflixAvatorlogo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Navigation from "./Navigation"
const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    
  }, []);
  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
    <div className="browse">
      <Navigation />
      </div>  

      <div className='header_left'>
      <ul>
      <li className="image">
              <Link href="/">
                <img src={Logo} alt="NetFlix Logo" width="100" />
              </Link>
            </li> 
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tvShows">TVShows</Link>
            </li>
            <li>
              <Link to="/movies/">Movies</Link>
            </li>
            <li>
              <Link to="/new_Popular/">New & Popular</Link>
            </li>
            <li>
              <Link to="/my_List/">My List</Link>
            </li>
            <li>
              <Link to="/browse_by_Language/">Browse by Language</Link>
            </li>
          </ul>
            </div>
              
   
            <div className="header_right">
          <ul> 
       <i className="fa fa-search" aria-hidden="true" ></i>    
        <a href=""></a>
            <li>
              <a href="#">kids</a>
            </li>
            <li>
              <Link to="#">
                <NotificationsNoneIcon />
              </Link>
            </li>
            <li>
              <Link to="#">
                 <img src={Avatarlogo} alt="NetFlixAvator Logo" width="20" />
              </Link>
            </li>
                   <li>
              <Link to="#" onClick={()=>{logout()}} >
                <ArrowDropDownIcon  />
              </Link>
              </li>
            </ul>
        </div>   
        </div>
      </div>
   
  );
};

export default Header;
