import {useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import CountryCard from '../components/CountryCard';
import {Row,Container} from 'react-bootstrap';

const Region = (props) => {
    let { region } = useParams();
    
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
          .get(`https://restcountries.com/v3.1/region/${region}`)
          .then((response) => {
            setCountries(response.data);
            }) .catch(error => {
            console.error(error);
        });
          
      }, [region]);
    
      let countryCards =countries.map((country, i) => (
        <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.subregion} />
      ))
    return(
        
      <Container className='mt-3'>
    <Row className= "g-2" md={3} xs={1} >
    {countryCards}
    </Row>
    </Container>
  );
}

export default Region;