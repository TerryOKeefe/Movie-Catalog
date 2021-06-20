import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddMovie.css';

// setup styles for material-ui
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


// function to add a movie
function AddMovie() {

    // variable for material-ui classes
    const classes = useStyles();

    // setup history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();

    // local state variable to hold inputs
    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        movie_id: null,
        genre_id: null
    });

    // function to handle save button click
    const handleClick = (event) => {
        event.preventDefault();
        // check to see what gets captured 
        console.log('New Movie', newMovie);
         // dispatch new movie to redux
        dispatch({type: 'ADD_MOVIE', payload: newMovie})

        // on Save click capture data and push to home
        history.push('/');
    } // end handleClick

    // function to set new values for movie
    const handleInputs = (key, value) => {
        // set new movie object with key and value
        setNewMovie({...newMovie,
            [key]: value,
        })
    } // end handleInputs

    // function to handle cancel button click
    const handleCancel = () => {
        // console log to see that cancel button is firing
        console.log('Clicked Cancel');
        // cancel add movie - move user to /home
        history.push('/');
    } // end handleCancel

    return (
        <div>
            <h1>Add A Movie</h1>
            <form className="add-movie-form">
                <div className="add-movie-input">
                    <TextField
                        id="standard-basic"
                        label="Movie Title" 
                        variant="outlined"
                        required
                        type="text"
                        onChange={(event) => handleInputs('title', event.target.value)}
                    />
                </div>
                <div className="poster-url-input">
                    <TextField
                        id="standard-basic" 
                        label="Movie Poster URL" 
                        variant="outlined"
                        required
                        type="text"
                        onChange={(event) => handleInputs('poster', event.target.value)}
                    />
                </div>
                <FormControl style={{minWidth: 185}} className="select-input">
                    <InputLabel>Genre</InputLabel>
                    <Select 
                        name="Genre"
                        defaultValue="0"
                        required
                        onChange={(event) => handleInputs('genre_id', event.target.value)}
                    >
                        <option value="0"></option>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                    </Select>
                </FormControl>
                <div className="textarea-input">
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        variant="outlined"
                        required
                        multiline
                        rows={6}
                        style={{width: 500}}
                        onChange={(event) => handleInputs('description', event.target.value)}
                    />
                </div>

                <div className="form-buttons">
                    <Button
                        className="cancel-btn"
                        size="medium"
                        variant="contained"
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        className='save-btn'
                        size="medium"
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={handleClick}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
} // end AddMovie

// export AddMovie
export default AddMovie;