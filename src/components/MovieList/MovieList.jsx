import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import '@fontsource/roboto';
import AddBtn from '../AddBtn/AddBtn';
import './MovieList.css';

// setup material-ui style
const useStyles = makeStyles({
    root: {
      minWidth: 100,
      maxWidth: 300,
    },
    card: {
        margin: 10,
        height: 410,
        width: 300,
        display: "inline-block",
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });

// function to display movies from DB to DOM
function MovieList() {
    // import from material-ui
    const classes = useStyles();

    // import history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();

    // import movies from redux store
    const movies = useSelector(store => store.movies);

    // on load dispatch FETCH_MOVIES
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); // load once
    }, []);

    // handle onClick for movie poster
    const handleMovieClick = (movie) => {
        // console log to see poster click fired
        // and movie id
        console.log('Clicked Poster, id is:,', movie);

        // dispatch to index.js
        dispatch({ type: 'GET_DETAILS', payload: movie });

        // on click change to /details view
        history.push('/details');
    } // end handleMovieClick

    return (
        <main>
            <h1>MovieList</h1>
            {/* Moves user to AddMovie view */}
            <Router>
                <Route>
                    <AddBtn />
                </Route>
            </Router>
            {/* Map through and display each in a card */}
            <div className="card-box">
                {movies.map((movie) => {
                    return (
                        <Card 
                            className={classes.card} 
                            variant="outlined"
                            style={{backgroundColor: "lightgrey"}}
                        >
                            <CardContent key={movie.id}>
                                {/* Display movie title in card */}
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {movie.title}
                                </Typography>
                                {/* Display movie poster image in card */}
                                <Typography>
                                    <img src=
                                        {movie.poster}
                                        alt={movie.title} />
                                </Typography>
                            </CardContent>
                            {/* Button to move user to movie details view for image clicked */}
                            <CardActions>
                                <Button 
                                    size="small"
                                    onClick={() => { handleMovieClick(movie) }}
                                >
                                    Movie Details
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        </main>
    );
} // end MovieList

// export MovieList
export default MovieList;