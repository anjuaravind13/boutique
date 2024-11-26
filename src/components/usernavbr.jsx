import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Usernavbr() {
    return (  <>
     <Navbar expand="lg shadow rounded" style={{fontFamily: 'Roboto,Arial,sans-serif', backgroundColor : 'pink',display:'flex' }}>
      <Container>
        <Navbar.Brand href="#home" style={{color: '#fff'}}>USER HOME PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productreg">Register</Nav.Link>
            <Nav.Link href="/logout">LogOut</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>);
}

export default Usernavbr;