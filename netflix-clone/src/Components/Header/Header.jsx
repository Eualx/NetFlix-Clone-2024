import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/image/NetflixLogo.png";
import Avatarlogo from "../../assets/image/NetflixAvatorlogo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Nav from "./Nav"
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
        <div className="left">
          <ul>
            <li className="image">
              <a href="#">
                <img src={Logo} alt="NetFlix Logo" width="100" />
              </a>
            </li>
          </ul>
        </div>
        <div className="center">
          <ul>
            <Nav />
            <li className="browse">Browse</li>
            <input type="checkbox" id="check" />
            <label htmlFor="check" class="checkbtn">
              <i className="fas fa-angle-down" id="bars"></i>
              <i className="fas fa-angle-up" id="cancle"></i>
            </label>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/TvShows">TVShows</a>
            </li>
            <li>
              <a href="/Movies">Movies</a>
            </li>
            <li>
              <a href="/New_Popular">New & Popular</a>
            </li>
            <li>
              <a href="/My_List">My List</a>
            </li>
            <li>
              <a href="/Browse_by_Language">Browse by Language</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <i className="fa fa-search" aria-hidden="true"></i>
            {/* <li><a href="#"><SearchIcon/></a></li> */}
            <li>
              <a href="#">kids</a>
            </li>
            <li>
              <a href="#">
                <NotificationsNoneIcon />
              </a>
            </li>
            <li>
              <a href="#"></a>
              <img src={Avatarlogo} alt="NetFlixAvator Logo" width="20" />
              <a />
            </li>
            <li>
              <a href="#">
                <ArrowDropDownIcon />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className='box'>
        <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" name=''placeholder='   Titles, people, genres'/> 
        <a href=""></a>
      
        </div> */}
      </div>
    </div>
  );
};

export default Header;
