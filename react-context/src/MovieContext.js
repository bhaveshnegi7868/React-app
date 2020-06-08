import React, {useState, createContext} from 'react'
import Nav from './Nav';
import MovieList from './Movielist';

export const MovieContext = createContext();


export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name:'harry potter',
            price: '200',
            id:124
        },
        {
            name:'baaghi 3',
            price: '456',
            id:98
        },
        {
            name:'Deshdrohi',
            price: '450',
            id:395
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}