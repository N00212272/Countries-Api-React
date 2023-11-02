import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container, Row , Col} from "react-bootstrap";

import './assets/app.css';

//import pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

//import components
import Navbar from "./components/Navbar";

import {useState , useEffect} from 'react';

function App() {

  const [term, setTerm] = useState("");
  
  const handleChange = (e) => {
    setTerm(e.target.value);
}
  // const handleSelect = (selected) = {

  // }
  return(
    <Router>
       <Navbar handleChange={handleChange} term={term}/>
      <Container>
        <Row>
          <Col>
            <Routes>
            <Route path='/' element={<Home term={term}/>} />
            <Route path='/country/:name' element={<SingleCountry/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
