import { useContext, useState } from 'react';
import { MovieContext, MovieProviderValue } from '../Contexts/MovieContext';
import Movie from '../types/movie';

const MovieForm = () => {

    const { movies, setMovies } = useContext(MovieContext) as MovieProviderValue;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(false);
    const [submitted, setSubmit] = useState(false)


    const updateName = (e: any) => setName(e.target.value);
    const updatePrice = (e: any) => setPrice(e.target.value);

    const handleSubmit = () => {
        setSubmit(true)
        if (name === '' || price === '') {
            setError(true);
        } else {
            const movie: Movie = { name, price, id: "" + (movies.length + 1) };
            setMovies(prevMovies => [...prevMovies, movie]);
            setSubmit(false);
        }

        setError(false);
    }

    return (
        <div className="movie-form">
            <h1 className="form-title ">Add Movie</h1>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" value={name} onChange={updateName} />
                {error || (submitted && name === '') ? (<label >Required</label>) : null}
            </div>
            <div className="form-group">
                <label className="form-label">Price</label>
                <input className="form-input" type="text" value={price} onChange={updatePrice} />
                {error || (submitted && price === '') ? (<label >Required</label>) : null}
            </div>
            <button className="btn-primary" onClick={() => handleSubmit()}>Save</button>
        </div>
    );
}

export default MovieForm;