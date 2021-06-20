// import react-redux 
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

// function to display movie details
function DetailsView() {

    // variable for redux store
    const details = useSelector(store => store.details)

    // setup useHistory
    const history = useHistory();

    // function to handle image click
    const handleClick = () => {
        
        // console log to see click fires
        console.log('Clicked Back to Movies');

        // go back to movie list home
        history.goBack();
    } // end handleClick

    return (
        <div>
            <h1>Movie Details Page</h1>
            {/* Button to go back to home view */}
            <Button 
                variant="contained"
                onClick={handleClick}
            >
                Back to Movies
            </Button>
            <section className="details-list">
                {/* map over details to display on DOM */}
                {details.map(detail => {
                    return (
                        <div className="detail-info" key={detail.id} >
                            <h3>{detail.title}</h3>
                            <img src={detail.poster}
                            alt={detail.title}
                            />
                             <h4>Genres</h4>
                             <div className="description-box">
                                <p>{detail.genre}</p>
                                <h4>Movie Description</h4>
                                <p>{detail.description}</p>
                             </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
} // end DetailsView

// export DetailsView
export default DetailsView;