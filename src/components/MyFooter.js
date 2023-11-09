import {Container} from 'react-bootstrap';

const MyFooter = () => {
    return(
        <Container fluid className='bg-dark mt-5 pb-5'>
            <h5 className='text-success text-center pt-3'>You have reached the bottom of the page, visit one of my other websites</h5>
        </Container>
    );
}
export default MyFooter;