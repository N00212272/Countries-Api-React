import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {Row,Col, Spinner, Image, Carousel, Container} from 'react-bootstrap';
import CountryCard from '../components/CountryCard';
import WeatherCard from "../components/WeatherCard";


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
    <Row className="mt-5">
      <Col xs={12} lg={6} pt={5}>
      <h2>
          <b>Common name: </b>
          {country.name.common}
        </h2>
        <Image className="border border-black" width="600" height="300"  src={country.flags.png} />
      </Col>
      
      <Col xs={12} lg={6}>
        <h2 className="mb-3"><b>Country Details</b></h2>
        <h5>
          <b>Official name: </b>
          {country.name.official}
        </h5>
        <h5>
          <b>Region: </b>
          {country.region}
        </h5>
        <h5>
          <b>Sub Region: </b>
          {country.subregion}
        </h5>
        <h5>
          <b>Population: </b>
          {country.population}
        </h5>
        <h5>
          <b>Currencies: </b>
          {Object.values(country.currencies)[0].name}
        </h5>
        </Col>
        
        <Col xs={12} lg={4} >
        {borders.length > 0 && (
          <div>
            <h5 className="mt-5"><b>Bordering Countries: </b></h5>
            
            {/* added Carousel as some countries had to many border and looked messy */}
            <Carousel>
              {borders.map((border, i) => (
                 <Carousel.Item>
                <div key={i}>
                  <CountryCard flag={border.flags.png} name={border.name.common} region={border.region} />
                </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
        {borders.length === 0 && (
          <h3 className="mt-3">I am an island!</h3>
        )}
        </Col>
        <Col xs={12} lg={4} className="mt-5">
          <WeatherCard  name={name}/>
        </Col>


        </Row>
        
    </Container>
    
  );
};

export default SingleCountry;
