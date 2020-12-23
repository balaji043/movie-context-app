import React, { Dispatch, SetStateAction, useState } from 'react';
import { createContext, ReactNode } from 'react';
import Movie from '../types/movie';
import { defaultMovies } from '../utils/data';

export type MovieProviderValue = {
    movies: Movie[],
    setMovies: Dispatch<SetStateAction<Movie[]>>;
};

export type MovieDefaultValue = undefined;

export type Props = {
    children: ReactNode,
}

export type ContextValue = MovieDefaultValue | MovieProviderValue;

export const MovieContext = createContext<ContextValue>(undefined);


const MovieProvider = ({ children }: Props) => {
    const [movies, setMovies] = useState(defaultMovies)
    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

export { MovieProvider };



