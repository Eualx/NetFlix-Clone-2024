import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/image/NetflixLogo.png";
import Avatarlogo from "../../assets/image/NetflixAvatorlogo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
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
            <li className="browse">Browse</li>
            <input type="checkbox" id="check" />
            <label htmlFor="check" class="checkbtn">
              <i className="fas fa-angle-down" id="bars"></i>
              <i className="fas fa-angle-up" id="cancle"></i>
            </label>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/TvShows">TVShows</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
            <li>
              <Link to="/New_Popular">New & Popular</Link>
            </li>
            <li>
              <Link to="/My_List">My List</Link>
            </li>
            <li>
              <Link to="/Browse_by_Language">Browse by Language</Link>
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
