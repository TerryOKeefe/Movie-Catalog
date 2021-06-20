import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


// function to handle Add A Movie button
function AddBtn() {
    
      // setup useHistory
  const history = useHistory();

  // on click handler to move user to /addMovie route
  const handleClick = () => {
    // console log to see click fires
    console.log('Clicked Add A Movie');
    // push user to /addMovie on click
    history.push('/add');
  } // end handleAddBtn

    return (
        <div>
            {/* Button to send user to Add a Movie view */}
            <Button
                className="add-btn"
                variant="contained"
                onClick={handleClick}
            >
                Add A Movie
            </Button>
        </div>
    )
} // end AddBtn

// export AddBtn
export default AddBtn;