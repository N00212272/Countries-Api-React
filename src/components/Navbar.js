import {Nav, Container, NavDropdown, Form, Button, Dropdown } from 'react-bootstrap';
import {useState , useEffect} from 'react';

import {Link, useNavigate} from 'react-router-dom';

const Navbar = (props) => {


   
    let navigate = useNavigate();
    const handleInputChange = (e) => {
        navigate('/');
        props.handleChange(e);
    }
    return (
        <>
        <Container fluid className='bg-black' >
        
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{maxHeight: '100px'}}
        navbarScroll>

        <h1><Link to='/'>Home</Link></h1>
        <input type='text' onChange={handleInputChange} value={props.term}/>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Region
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Africa</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
           
            </Container>
        </>
    );
}

export default Navbar;