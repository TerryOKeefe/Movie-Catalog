import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import DetailsView from '../DetailsView/DetailsView';
import AddMovie from '../AddMovie/AddMovie';
import AddBtn from '../AddBtn/AddBtn';

function App() {


  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      <Router>
        {/* Moves user to AddMovie view */}
        <Route>
          <AddBtn />
        </Route>
        
        {/* Movie List */}
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <DetailsView />
        </Route>

        {/* Add Movie page */}
        <Route path="/add">
          <AddMovie />
        </Route>
          
      </Router>
    </div>
  );
}


export default App;
