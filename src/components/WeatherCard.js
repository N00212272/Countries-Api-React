import {useState , useEffect} from 'react';
import axios from 'axios';

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
        <Card style={{ width: '25rem' }}>
             {weather?.current?.condition && (
                <Card.Body>
                    <Card.Img className="border border-black" src={weather.current.condition.icon} variant="top" height="200"/>
            <Card.Title>{weather.current.condition.text}</Card.Title>
            <p><b>Current temp: </b>{weather.current.temp_c} Celcius</p>
            <p><b>Wind Speed: </b>{weather.current.wind_kph} Kp/h</p>
            <p><b>Uv index: </b>{weather.current.uv}</p>
            <p><b>Current Date and Time: </b>{weather.location.localtime}</p>
            </Card.Body>
            )}

        </Card>
    );
}

export default WeatherCard;