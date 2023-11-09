import {Card , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CountryCard = (props) => {



    return (
        <Card className='m-2 border border-2 border-success text-center ' style={{ width: '25rem' }}>
            <Card.Img className="border border-1 border-black w-100 h-100" src={props.flag} variant="top" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <p>{props.region}</p>
                <Link to={`/country/${props.name}`}><Button variant='success'>See more Details</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CountryCard;