import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './cart';
import { FaShoppingCart } from "react-icons/fa";
import {
  Badge,
  Button,
  Dropdown,
  FormControl,
  
} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'

function Navbr() {
  const count = useSelector((state) => state.counter.count)
    return (  <>
     <Navbar expand="lg" style={{fontFamily: 'Roboto,Arial,sans-serif',display:'flex',backgroundColor : 'pink' }}>
      <Container >
        <Navbar.Brand href="#home" style={{color: '#fff'}}>BOUTIQUE HOME PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="nav text-white d-flex justify-content-end fs-5"  >
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/register">Register</Nav.Link>
            <Nav.Link className="text-white" href="/login">Login</Nav.Link>
            <Nav.Link className="text-white" href="/cartcard">Cart</Nav.Link>
            <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{count.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:370}}>
              <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
            
            </Dropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        <Cart/>
      </Container>
    </Navbar>
    </>);
}

export default Navbr;

{/* <Nav class="nav justify-content-end" > */}
//class="nav-item nav-link "