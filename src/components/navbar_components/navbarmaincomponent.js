import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

function NavbarMainComponent({isLoggedIn,logout}) {
	return (
		<Navbar expand="lg" fixed="top" style={{backgroundColor: '#5d4949'}}>
  <Navbar.Brand href="#home" style={{}}>
				<Link
					to="/home"
					style={{ textDecoration: 'none', color: 'black' }}
					className="logo-name font-weight-bold "
				>
					GratiS'{' '}
				</Link>
			</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="profile">Your Profile</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={()=>{console.log("action clicked")}}>Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
	  {isLoggedIn&&<Button variant="outline-success" style={{margin: '5px'}} onClick={logout}>Logout</Button>}
    </Form>
  </Navbar.Collapse>
</Navbar>
			
	);
}

export default NavbarMainComponent;