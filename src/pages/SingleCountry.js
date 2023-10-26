import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {Row,Col, Spinner, Image} from 'react-bootstrap';

const SingleCountry = () => {
    let {name} = useParams();

    const [country,setCountry] = useState(null);
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`).then(response => {
            console.log(response.data[0]);
            setCountry(response.data[0]);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    if(!country){
        return (
          <Spinner/>
        );
    }
    return (
        <Row>
            <Col>
                <Image src={country.flags.png}/>
            </Col>
            <Col>
            <p><b>Common name:</b>{country.name.common}</p>
            {/* <p><b>Common name:</b>{(country) ? country.name.common : 'loading....'}</p> */}
            <p><b>Official name:</b>{country.name.official}</p>
            <p><b>Region:</b>{country.region}</p>
            <p><b>Sub Region:</b>{country.subregion}</p>
            <p><b>Currencies:</b>{Object.values(country.currencies)[0].name}</p>
            {/* IF a country has more then currencies loop through this above */}
            </Col>
        </Row>
        
    );
   

}

export default SingleCountry;