import {useState , useEffect} from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import {Row, Button} from 'react-bootstrap';


const Home = () => {
    
    const [countriesList, setCountriesList] = useState([]);
    const [term, setTerm] = useState("");

    ;

    const handleChange = (e) => {
        setTerm(e.target.value)
     };

     const handleClick = () => {
        searchCountry();
     }

     const handleKeyUp = (e) => {
         if(e.key === 'Enter'){
            searchCountry();
         }
         
     }

     const searchCountry = () => {

         if(!term){
             alert("please enter a search term");
             return;
         }

         axios.get(`https://restcountries.com/v3.1/name/${term}`)
        
         .then((response) => {
            console.log(response.data);
            setCountriesList(response.data);

         })

         .catch((error) => {

             console.log(error);

         });

         setTerm("")

     }
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            // console.log(response.data);
            setCountriesList(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    let countryCards = countriesList.map((country, i) => {
        return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region}/>;
    });

    return (
        <>
        <Row>
        <div className="search mt-2 mb-2">
        <input type="text" value={term} onChange={handleChange} onKeyUp={handleKeyUp} />
        <Button variant="primary" onClick={handleClick}>Search</Button>
        </div>
        <div>

        </div>
        </Row>
        <Row className= "g-2" md={3} xs={1} >
        {countryCards}
        </Row>
        </>
    );
}

export default Home;