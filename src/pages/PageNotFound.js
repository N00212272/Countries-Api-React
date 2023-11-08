import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
const PageNotFound = () => {

    let location = useLocation();

    return (
        <div>
            <b><h1 className='text-danger'>Sorry, 404 the page {location.pathname} was not found</h1></b>
            <Link to="/"><h2>Please redirect to home</h2></Link>
        </div>
    );
};

export default PageNotFound;