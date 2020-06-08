import React,{useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className="row" style={{background: "#4444bd",height:"4em"}}>
            <div className="my-auto col-lg-6">
                <h3 style={{color:"white"}}>Bhavesh Negi</h3>
            </div>
            <div className="my-auto col-lg-6">
              <h3 style={{color:"white"}}>List of Movies : {movies.length}</h3>
            </div>
        </div>
        
    );
}

export  default Nav