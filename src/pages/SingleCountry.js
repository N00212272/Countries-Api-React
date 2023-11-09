import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {Row,Col, Spinner, Image, Carousel, Container} from 'react-bootstrap';
//Components
import WeatherCard from "../components/WeatherCard";
import BorderCard from "../components/BorderCard";
import NoBorderCard from "../components/NoBorderCard";


const SingleCountry = () => {
  let { name } = useParams();

  const [country, setCountry] = useState(null);

  const [borders, setBorders] = useState([]);

  

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => {
        const countryData = response.data[0];
        setCountry(countryData);
       
        // Some countries didnt have borders and the page would crash on some countries
       
          axios
            .get(
                `https://restcountries.com/v3.1/alpha?codes=${countryData.borders}`
            )
            .then((borderResponse) => {
              setBorders(borderResponse.data);
            })
            .catch((error) => {
              console.error(error);
            })
    
          .catch((error) => {
            console.error(error);
          });
      }) 
      
  }, [name]);
  


  if (!country) {
    return <Spinner animation="border" />;
  }


  return (
    <Container>
    <Row className="mt-5 ">
      <h1 className="text-center mb-4">
        <b>{country.name.common}</b>
        
      </h1>
      
        <Col xs={12} lg={6} pt={5}>
          <Image className="border border-black border-3 w-100 " height="450"  src={country.flags.png} />
        </Col>
      
      <Col xs={12} lg={6} className="border border-success rounded text-white text-center bg-black ">
      <br/>
        <h2 className="mb-3"><b>Country Details:</b></h2>
        
        <h5>
           <br/>
          <b>Official name: </b>
          {country.name.official}
        </h5>
       
        <h5>
          <b>Capital: </b>
          {country.capital}
        </h5>
        <br/>
        <h5>
          <b>Region: </b>
          {country.region}
        </h5>
        <h5>
          <b>Sub Region: </b>
          {country.subregion}
        </h5>
        <br/>
        <h5>
          <b>Population: </b>
          {country.population}
        </h5>
        <h5>
          <b>Currency: </b>
          {Object.values(country.currencies)[0].name}
          
        </h5>
        <h5>
          <b>Languages: </b>
          {/* some countries have more then 1 language so i created a condition checking this */}
          {Object.values(country.languages).map((language, i) => (
            <h5 key={i}>{language}{i < Object.values(country.languages).length -1 ? ', ' : ''}</h5>
          ))}
        </h5>
        </Col>
        </Row>
        <Row className="mt-5">
        <Col xs={12} lg={6}>
          <h4><b>Weather Information:</b></h4>
          <WeatherCard name={name} />
        </Col>
        <Col xs={12} lg={6} >
         
        {borders.length > 0 && (
          <div>
            <h4><b>Bordering Countries: </b></h4>
            
            {/* added Carousel as some countries had to many border and looked messy */}
            <Carousel data-bs-theme="dark" fade>
              {borders.map((border, i) => (
                // inerval to change the slide
                 <Carousel.Item interval={2000}>
                <div key={i}>
                  <BorderCard flag={border.flags.png} name={border.name.common} />
                </div>
                </Carousel.Item>
                
                
              ))}
            </Carousel>
          </div>
        )}
        
        {borders.length === 0 && (
          <>
          <h4><b>No Bordering Countries </b></h4>
          <NoBorderCard />
          </>
        )}
        </Col>
       
        </Row>
        
    </Container>
    
  );
};

export default SingleCountry;
