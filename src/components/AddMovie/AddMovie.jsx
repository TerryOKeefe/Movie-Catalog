import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import './AddMovie.css';

// function to add a movie
function AddMovie() {

    // setup useHistory
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
    const handleClick = () => {
        // check to see what gets captured 
        console.log('New Movie', newMovie);
         // dispatch new movie to redux
        dispatch({type: 'ADD_MOVIE', payload: newMovie})
        
    } // end handleClick

    // function to set new values for movie
    const handleInputs = (key, value) => {
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
            <form >
                <div>
                    <input 
                        type="text"
                        placeholder="Movie Title"
                        onChange={(event) => handleInputs('title', event.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="Movie Poster URL"
                        onChange={(event) => handleInputs('poster', event.target.value)}
                    />
                </div>
                <div>
                    <textarea 
                        placeholder="Movie Description"
                        rows="6"
                        cols="50"
                        onChange={(event) => handleInputs('description', event.target.value)}
                    />
                </div>
                <div>
                    <select 
                        name="Genre" 
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
                    </select>
                </div>
                <div>
                    <Button
                        className="feeling-btn"
                        size="medium"
                        variant="contained"
                        color="secondary"
                        type="button"
                        onClick={() => handleCancel()}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="feeling-btn"
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