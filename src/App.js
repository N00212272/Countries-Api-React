import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container, Row , Col} from "react-bootstrap";
import './assets/app.css';

//import pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

//import components
import Navbar from "./components/Navbar";

function App() {
  return(
    <Router>
       <Navbar />
      <Container>
        <Row>
          <Col>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/country/:name' element={<SingleCountry/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
