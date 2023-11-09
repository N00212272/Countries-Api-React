import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container, Row , Col} from "react-bootstrap";

import './assets/app.css';

//import pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import Region from "./pages/Region";
import PageNotFound from "./pages/PageNotFound";

//import components
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

import {useState , useEffect, } from 'react';

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
       <MyNavbar handleChange={handleChange} onRegionChange={handleRegionChange} term={term}/>
      <Container>
        <Row>
          <Col>
            <Routes>
            <Route path='/' element={<Home term={term}/>} />
            <Route path='/country/:name' element={<SingleCountry/>} />
            <Route path="/regions/:region" element={<Region selectedRegion={selectedRegion} />} />
            <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <MyFooter/>
    </Router>
  );
}

export default App;
