import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // handle onClick for movie poster
    function handleMovieClick() {
        // console log to see poster click fired
        console.log('Clicked Poster');

        // on click change to /details view
        history.push('/details');
    } // end handleMovieClick

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src=
                            {movie.poster} 
                            alt={movie.title}
                            onClick={() => {handleMovieClick()}}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;