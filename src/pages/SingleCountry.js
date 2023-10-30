import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {Row,Col, Spinner, Image, Carousel} from 'react-bootstrap';
import CountryCard from '../components/CountryCard';

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
        if (countryData.borders.length > 0) {
          
          axios
            .get(
                `https://restcountries.com/v3.1/alpha?codes=${countryData.borders}`
            )
            .then((borderResponse) => {
              setBorders(borderResponse.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);


  if (!country) {
    return <Spinner animation="border" />;
  }

  return (
    <Row className="mt-5">
      <Col>
        <Image className="border border-black" src={country.flags.png} />
      </Col>
      <Col>
        <p>
          <b>Common name:</b>
          {country.name.common}
        </p>
        <p>
          <b>Official name:</b>
          {country.name.official}
        </p>
        <p>
          <b>Region:</b>
          {country.region}
        </p>
        <p>
          <b>Sub Region:</b>
          {country.subregion}
        </p>
        <p>
          <b>Population:</b>
          {country.population}
        </p>
        <p>
          <b>Currencies:</b>
          {Object.values(country.currencies)[0].name}
        </p>
        {borders.length > 0 && (
          <div>
            <b>Bordering Countries:</b>
            {/* added Carousel as some countries had to many border and looked messt */}
            <Carousel>
              {borders.map((border, i) => (
                 <Carousel.Item>
                <div key={i}>
                  <CountryCard flag={border.flags.png} name={border.name.common} />
                </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default SingleCountry;
