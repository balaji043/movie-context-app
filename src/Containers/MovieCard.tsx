import { FC } from 'react';
import Movie from '../types/movie';

interface ComponentProps {
    movie: Movie
}

const MovieCard: FC<ComponentProps> = ({ movie }: ComponentProps) => {
    return (
        <div className="movie-container">
            <h1 className="movie-title">{movie.name}</h1>
            <h3 className="movie-price">{movie.price}</h3>
        </div>
    );
}

export default MovieCard;