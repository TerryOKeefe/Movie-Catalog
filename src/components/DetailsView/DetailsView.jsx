// import react and react-redux 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// function to display movie details
function DetailsView() {

    // setup dispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect for getDetails
    useEffect(() => {
        getDetails() // load once
    }, []);

    // function to get individual details
    const getDetails = () => {
        dispatch({type: 'GET_DETAILS'});
    }

    const handleClick = () => {
        // console log to see click fires
        console.log('Clicked Back to Movies');

        // go back to movie list home
        history.push('/');
    }

    return (
        <div>
            <h1>Movie Details Page</h1>
            <button onClick={handleClick}>Back to Movies</button>
        </div>
    )
} // end DetailsView

// export DetailsView
export default DetailsView;