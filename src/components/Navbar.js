import {Nav, Container, NavDropdown, Form, Button, Dropdown } from 'react-bootstrap';
import {useState , useEffect} from 'react';

import {Link, useNavigate} from 'react-router-dom';

const Navbar = (props) => {

    let navigate = useNavigate();
    const [selectedRegion, setSelectedRegion] = useState([]);

    const handleInputChange = (e) => {
        navigate('/');
        props.handleChange(e);
    }

    const handleRegionSelect = (region) => {
      setSelectedRegion(region);
      props.onRegionChange(region);
      navigate(`/regions/${region}`);
    };

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
            Region: {selectedRegion}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate(`/`)}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => handleRegionSelect('Africa')}>Africa</Dropdown.Item>
            <Dropdown.Item onClick={() => handleRegionSelect('Europe')}>Europe</Dropdown.Item>
            <Dropdown.Item onClick={() => handleRegionSelect('Asia')}>Asia</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Nav>
           
            </Container>
        </>
    );
}

export default Navbar;