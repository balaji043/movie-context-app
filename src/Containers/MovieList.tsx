import { useContext } from 'react';
import {  MovieContext, MovieProviderValue } from '../Contexts/MovieContext';
import Movie from '../types/movie';
import MovieCard from './MovieCard';

const MovieList = () => {
    const { movies } = useContext(MovieContext) as MovieProviderValue;

    return (
        <div className="movie-wrapper-grid">
            {
                movies.map(
                    (movie: Movie) => <MovieCard key={movie.id} movie={movie} />
                )
            }
        </div>
    );
}

export default MovieList;