import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NetflixLogo from "../../assets/image/NetflixLogo.png";
import "./Header.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function NavSection() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand className="navLink" href="#home">
              <img src={NetflixLogo} alt="Netflix Logo" width="90" />
            </Navbar.Brand>
           
            <div className=" DropDown ">
              <NavDropdown title="Browse" id="basic-nav-dropdown">
          
                <div className="DropDownContent">
                  <NavDropdown.Item href="/">
                    <p>Home </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tvShows">
                    <p>TVShows</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies">
                    <p>Movies</p>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/new_Popular">
                    <p> New & Popular</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/my_List">
                    <p>My List</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/browse_by_Language">
                    <p>Browse by Languages</p>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;