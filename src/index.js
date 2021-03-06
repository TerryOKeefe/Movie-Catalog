import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_DETAILS', fetchDetails);
    yield takeEvery('ADD_MOVIE', addMovie)
} // end rootSaga

// generator function to post movie
function* addMovie(action) {
    // log to see what comes in
    console.log('addMovie Response:', action.payload);
    // console log to check id
    console.log('addMovie payload id:', action.payload.id);
    try {
        // post new movie
        yield axios.post('/api/movie', action.payload);
        // get the movies to render to DOM
        yield put({ type: 'FETCH_MOVIES'});
    } catch (error) {
        // console log any errors
        console.log('Error in POST:', error);
    }
} // end addMovie

// generator function to get details by id
function* fetchDetails(action) {
    // console log to see what comes back
    console.log('In fetchDetails, payload:', action.payload);
    // get details for id selected in movie list
    console.log('action.payload id', action.payload.id)
    try {
        // axios get the details per id
        const response = yield axios.get(`/api/genre/${action.payload.id}`);
        // console log to see what response.data is
        console.log('Response in fetchDetails', response.data);
        // set details to store the response.data
        yield put({type: 'SET_DETAILS', payload: response.data})
    } catch (error) {
        // console log errors
        console.log('Error in fetchDetails:', error);
    }
} // end fetchDetails

function* fetchAllMovies() {
    // get all movies from the DB

    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }    
} // end fetchAllMovies

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store details for image selected
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS' :
            return action.payload;
        default :
            return state;
    }
} // end details

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
} // end movies

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
} // end genres

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
