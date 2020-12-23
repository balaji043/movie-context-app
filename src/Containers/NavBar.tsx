import { FC, useContext } from 'react';
import {  MovieContext, MovieProviderValue } from '../Contexts/MovieContext';

interface ComponentProps {

}

const NavBar: FC<ComponentProps> = (props: ComponentProps) => {
    const title = "Movie DB"
    const { movies } = useContext(MovieContext) as MovieProviderValue;
    return (
        <div>
            <header className="nav-bar">
                <h1>{title}</h1>
                <h3>
                    No of movies : {movies.length}
                </h3>
            </header>
        </div>
    );
}

export default NavBar;