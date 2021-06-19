// import react and react-redux 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// function to display movie details
function DetailsView() {

    // setup dispatch
    const dispatch = useDispatch();

    // useEffect for getDetails
    useEffect(() => {
        getDetails() // load once
    }, []);

    // function to get individual details
    const getDetails = () => {
        dispatch({type: 'GET_DETAILS'});
    }

    return (
        <div>
            <h1>Movie Details Page</h1>
        </div>
    )
} // end DetailsView

// export DetailsView
export default DetailsView;