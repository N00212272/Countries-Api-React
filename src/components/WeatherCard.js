import {useState , useEffect} from 'react';
import axios from 'axios';
import {Row,Col, Container} from 'react-bootstrap';

import {Card} from 'react-bootstrap';

const WeatherCard = (props) => {

    const [weather, setWeather] = useState([]);

    const WeatherApiKey = '5fd90dc7ef56412eb83160305230111';

    useEffect(()=>{
        axios
        .get(`https://api.weatherapi.com/v1/current.json?key=${WeatherApiKey}&q=${props.name}`)
        .then((weatherResponse)=>{
          // console.log(weatherResponse.data)
          setWeather(weatherResponse.data)
        })
        .catch((error)=>{
          console.error(error);
        })
      })
    return (
        <Card className='rounded border border-4 border-success' >
             {weather?.current?.condition && (
                <Card.Body>
                  <Row>
                    <Col>
                   <Card.Img className="border border-black w-100" src={weather.current.condition.icon} variant="top"/>
                   </Col>
                   <Col>
                  <Card.Title className=''><b>Current Condition: </b>{weather.current.condition.text}</Card.Title>
                   
            <p><b>Current temp: </b>{weather.current.temp_c} Celcius</p>
            <p><b>Feels like: </b>{weather.current.feelslike_c} Celcius</p>
            <p><b>Wind Speed: </b>{weather.current.wind_kph} Kp/h</p>
            <p><b>Wind direction: </b>{weather.current.wind_dir}</p>
            <p><b>Uv index: </b>{weather.current.uv}</p>
            <p><b>Current Date and Time: </b>{weather.location.localtime}</p>
            
            </Col>
            </Row>
            </Card.Body>
            
            )}

        </Card>
    );
}

export default WeatherCard;