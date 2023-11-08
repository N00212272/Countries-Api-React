import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container, Row , Col} from "react-bootstrap";

import './assets/app.css';

//import pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import Region from "./pages/Region";

//import components
import Navbar from "./components/Navbar";

import {useState , useEffect} from 'react';

function App() {

  const [term, setTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
}
    const handleRegionChange = (region) => {
      setSelectedRegion(region);
    };

  return(
    <Router>
       <Navbar handleChange={handleChange} onRegionChange={handleRegionChange} term={term}/>
      <Container>
        <Row>
          <Col>
            <Routes>
            <Route path='/' element={<Home term={term}/>} />
            <Route path='/country/:name' element={<SingleCountry/>} />
            <Route path="/regions/:region" element={<Region selectedRegion={selectedRegion} />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
