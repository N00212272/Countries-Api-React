import {Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';


import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <>
        <Container fluid className='bg-black' >
        <h1><Link to='/'>Home</Link></h1>
        
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{maxHeight: '100px'}}
        navbarScroll>
            </Nav>
           
            </Container>
        </>
    );
}

export default Navbar;