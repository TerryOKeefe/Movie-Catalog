import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import './AddMovie.css';

// function to add a movie
function AddMovie() {

    // import useHistory
    const history = useHistory();

    // useState to hold all inputs from user
    // const [newMovie, setNewMovie] = useState({
    //     title : title,
    //     poster : poster,
    //     description : description, 
    //     name : name
    // });

    const handleSubmit = () => {

    }

    const handleCancel = () => {
        // console log to see that cancel button is firing
        console.log('Clicked Cancel');
        // cancel add movie - move user to /home
        history.push('/');
    }

    return (
        <div>
            <h1>Add A Movie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Movie Title"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Poster Image URL"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        label="Select Genre"
                        width="50"
                        required
                        select
                        defaultValue=""
                        onChange={event => setGenre(event.target.value)}
                        helperText="Required"
                    >
                        <MenuItem value='1'>Adventure</MenuItem>
                        <MenuItem value='2'>Animated</MenuItem>
                        <MenuItem value='3'>Biographical</MenuItem>
                        <MenuItem value='4'>Comedy</MenuItem>
                        <MenuItem value='5'>Disaster</MenuItem>
                        <MenuItem value='6'>Drama</MenuItem>
                        <MenuItem value='7'>Drama</MenuItem>
                        <MenuItem value='8'>Fantasy</MenuItem>
                        <MenuItem value='9'>Musical</MenuItem>
                        <MenuItem value='10'>Romantic</MenuItem>
                        <MenuItem value='11'>Science Fiction</MenuItem>
                        <MenuItem value='12'>Space-Opera</MenuItem>
                        <MenuItem value='13'>Superhero</MenuItem>
                    </TextField>
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