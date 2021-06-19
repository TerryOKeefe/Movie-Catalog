import { useHistory } from 'react-router-dom';

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
            <button
                className="add-btn"
                onClick={handleClick}
            >
                Add A Movie
            </button>
        </div>
    )
} // end AddBtn

// export AddBtn
export default AddBtn;