import {Card } from 'react-bootstrap';

const NoBorderCard = () => {

    return (
        <Card className='m-2 border border-2 text-center w-100'>
            <Card.Img className="border border-1 border-black" src={'https://images.pexels.com/photos/1316897/pexels-photo-1316897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} variant="top" height="300" />
            <Card.Body>
                <Card.Title>I am an island</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default NoBorderCard;