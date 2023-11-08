import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CountryCard = (props) => {
    return (
        <Card className='m-2' style={{ width: '25rem' }}>
            <Card.Img className="border border-black" src={props.flag} variant="top" height="250" width="250"/>
            <Card.Body>
                <Card.Title><Link to={`/country/${props.name}`}>{props.name}</Link></Card.Title>
                <p>{props.region}</p>
            </Card.Body>
        </Card>
    );
}

export default CountryCard;