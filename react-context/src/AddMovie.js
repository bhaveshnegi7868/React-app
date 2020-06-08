import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

const  AddMovies = () => {
    const [name, setName] = useState('');
    const [price, setPrice]  = useState('');
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    }

    return(
        <form onSubmit={addMovie} className="row ml-5 mr-5">
            <input className = "col-lg-6 form-control" type="text" name="Movie name" value={name} onChange={updateName}/>
            <input className = "col-lg-6 form-control" type="text" name="Price" value={price} onChange={updatePrice}/>
            <button className="btn btn-primary" style={{display:'flex',justifyContent:'flex-end'}}>Save Movie</button>
        </form>
    );
}

export default AddMovies