import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Netflixlogo from '../../assets/image/NetflixLogo.png'

function Navigation() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className='d-flex'>
        <Navbar.Brand href=""><img src={Netflixlogo} width="90"/></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                TvShows
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New & Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Browse by Language</NavDropdown.Item>
            </NavDropdown>
            <div className='d-flex'>
             <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
             <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;