// import react-redux 
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// function to display movie details
function DetailsView() {

    // variable for redux store
    const details = useSelector(store => store.details)

    // setup useHistory
    const history = useHistory();

    // function to handle click
    const handleClick = () => {
        // console log to see click fires
        console.log('Clicked Back to Movies');

        // go back to movie list home
        history.push('/');
    } // end handleClick

    return (
        <div>
            <h1>Movie Details Page</h1>
            <button onClick={handleClick}>Back to Movies</button>
            <section className="details-list">
                {details.map(detail => {
                    return (
                        <div key={detail.id} >
                            <h3>{detail.title}</h3>
                            <img src={detail.poster}
                            alt={detail.title}
                            />
                            <p>{detail.description}</p>
                            <h4>Genres</h4>
                            <p>{detail.genre}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
} // end DetailsView

// export DetailsView
export default DetailsView;