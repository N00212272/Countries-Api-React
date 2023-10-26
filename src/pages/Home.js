import {useState , useEffect} from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import {Row} from 'react-bootstrap';

const Home = () => {
    const [countriesList, setCountriesList] = useState([]);

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            console.log(response.data);
            setCountriesList(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    let countryCards = countriesList.map((country, i) => {
        return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region}/>;
    });

    return (
        <Row className= "g-2" md={3} xs={1} >
        {countryCards}
        </Row>
        
    );
}

export default Home;