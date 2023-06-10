import {Nav, Navbar, Container} from 'react-bootstrap';  
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";



function Header() {  
  return (  
    <Navbar bg="light" expand="xl"  className='navbar-light sticky-top'>  
    <Container fluid="sm">  
      <Navbar.Brand href="#home" className='text-dark'><img src={logo} width='170'/></Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-dark'/>  
      <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">  
        <Nav>  
          <Nav.Link as={Link} to="/" className={`hoverlink text-dark text-uppercase text-center mx-2`}>Home</Nav.Link>  
          <Nav.Link as={Link} to="/about" className='hoverlink text-dark text-uppercase text-center mx-2'>About Us</Nav.Link>  
          <Nav.Link as={Link} to="/gallery" className='hoverlink text-dark text-uppercase text-center  mx-2'>Gallery</Nav.Link>   
          <Nav.Link as={Link} to="/contact" className='hoverlink text-dark text-uppercase text-center  mx-2'>Contact</Nav.Link>
          <Nav.Link as={Link} to="/facilities" className='hoverlink text-dark text-uppercase text-center mx-2'>Facilities</Nav.Link>
          {/* <NavDropdown title="Rooms" id="basic-nav-dropdown" className='text-uppercase text-center mx-2'>
              <NavDropdown.Item as={Link} to="/jasmanium-cottage" className='text-dark text-uppercase text-center'>Jasmanium cottage</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/iris-dorm"  className='text-dark text-uppercase text-center'>
              Iris Family Cottage
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lilium-twin-rooms" className='text-dark text-uppercase text-center'>
                Lilium Twin Rooms
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mango-cottage" className='text-dark text-uppercase text-center'>Mango cottage</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blue-bell-cottage" className='text-dark text-uppercase text-center'>Blue Bell Cottage</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/packages" className='hoverlink text-dark text-uppercase text-center mx-2'>Rooms & Packages</Nav.Link>
          <Nav.Link href="https://www.google.com/maps/place/River+Orchid+Resort+Tapola/@17.7790795,73.7202287,847m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3bc26d1711a327d5:0xea2c5a61ce803051!8m2!3d17.7790795!4d73.7202287" target="_blank" className='hoverlink text-dark text-uppercase text-center mx-2'>Show On Map</Nav.Link>
          <Nav.Link href="https://www.asiatech.in/booking_engine/index3.php?token=MzU0NQ==" target="_blank" className={`text-uppercase bgPink btn-pink text-center text-white mx-2`}>Book Now</Nav.Link>

          
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  );  
}  
export default Header;
