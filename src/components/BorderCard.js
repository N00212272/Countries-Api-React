import {Card , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const BorderCard = (props) => {

    return (
        <Card className=' border border-2 text-center' >
            <Card.Img className="border border-1 border-black" src={props.flag} variant="top" height="250" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <p>{props.region}</p>
                <Link to={`/country/${props.name}`}><Button variant='success' >See more Details</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default BorderCard;