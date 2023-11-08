import {useState , useEffect} from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import {Row, Button,Container} from 'react-bootstrap';


const Home = (props) => {
    
    const [countriesList, setCountriesList] = useState([]);
   
     const [searchCountries, setSearchCountries] = useState([]);

  
    

     useEffect(() => {
      
        if(props.term <=3){
            setSearchCountries(countriesList)
        }
        else{
            let countryFilter = countriesList.filter((country) => {
                return country.name.common.toLowerCase().includes(props.term.toLowerCase());
            })
            setSearchCountries(countryFilter)
        }
    },[countriesList,props.term]);
      


    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            // console.log(response.data);
            setCountriesList(response.data);
            setSearchCountries(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    

    let countryCards = searchCountries.map((country, i) => {
        return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region}/>;
    });

    return (
        <Container className='mt-3'>
        <Row className= "g-2" md={3} xs={1} >
        {countryCards}
        </Row>
        </Container>
    );
}

export default Home;