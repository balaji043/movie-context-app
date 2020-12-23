import React from 'react';
import './App.scss';
import NavBar from './Containers/NavBar';
import MovieList from './Containers/MovieList';
import MovieForm from './Containers/MovieForm';
import { MovieProvider } from './Contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <NavBar />
        <div className="app-content-container">
          <MovieForm />
          <MovieList />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
