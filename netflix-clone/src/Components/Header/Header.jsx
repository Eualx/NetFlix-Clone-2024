import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/image/NetflixLogo.png";
import Avatarlogo from "../../assets/image/NetflixAvatorlogo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
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

      <div className='header_left'>
                <ul>
                <li className="image">
              <a href="#">
                <img src={Logo} alt="NetFlix Logo" width="100" />
              </a>
            </li> 
            <p>Browse</p>
            <input type="checkbox" id="check" />
            <label htmlFor="check" class="checkbtn">
              <i className="fas fa-angle-down" id="bars"></i>
              <i className="fas fa-angle-up" id="cancle"></i>
            </label> 


           <li>
              <a href="/">Home</a>
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
              {/* <div className="Navabar">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="dropdown">
              <NavDropdown title="Browse" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/home">
                    <p>Home </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tvshow">
                    <p>TVShows</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies">
                    <p>Movies</p>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/new&popular">
                    <p> New & Popular</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mylist">
                    <p>My List</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/browsebylanguages">
                    <p>Browse by Languages</p>
                  </NavDropdown.Item>
              </NavDropdown>
              </div>
           </Nav>
        </Navbar.Collapse>
    </Navbar>
            </div>   */}
   
            <div className="header_right">
          <ul>
            <i className="fa fa-search" aria-hidden="true"></i>
            {/* <input type="text" name=''placeholder='   Titles, people, genres'/>  */}
        <a href=""></a>
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







        
        {/* <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className=" DropDown ">
              <NavDropdown title="Browse" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/home">
                    <p>Home </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tvshow">
                    <p>TVShows</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies">
                    <p>Movies</p>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/new&popular">
                    <p> New & Popular</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mylist">
                    <p>My List</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/browsebylanguages">
                    <p>Browse by Languages</p>
                  </NavDropdown.Item>
              </NavDropdown>
            </div>
           </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>  */}
        
           
          
     
    
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
