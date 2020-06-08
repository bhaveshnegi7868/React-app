import React from 'react';
import './App.css';
import MovieList from './Movielist'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MovieProvider} from './MovieContext';
import AddMovies from './AddMovie'

function App() {
  return (
    <MovieProvider>
      <div className="App">
            <Nav/>
            <AddMovies/>
            <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
