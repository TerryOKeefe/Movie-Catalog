import { HashRouter as Router, Route } from 'react-router-dom';
import '@fontsource/roboto';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import DetailsView from '../DetailsView/DetailsView';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header /> 
      <Router>
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

// export App
export default App;