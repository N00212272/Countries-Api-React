import {Nav, Container, Dropdown, Navbar } from 'react-bootstrap';
import {useState , useEffect} from 'react';

import {Link, useNavigate} from 'react-router-dom';

const MyNavbar = (props) => {

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
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
        
     

        <h1><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></h1>
        <input type='text' placeholder="Search a Country" onChange={handleInputChange} value={props.term}/>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
            Region: {selectedRegion}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate(`/`)}>All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRegionSelect('Africa')}>Africa
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRegionSelect('Europe')}>Europe
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRegionSelect('Asia')}>Asia
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
           
            </Container>
            </Navbar>
    );
}

export default MyNavbar;