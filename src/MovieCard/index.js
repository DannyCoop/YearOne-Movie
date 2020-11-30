import React from 'react'
import './MovieCard.css'

function MovieCard(props){
    return(
        <div className="MovieCard">
            <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}/>
            <h3>{props.movie.title}</h3>
            {console.log(props)}
        </div>
    )
}

export default MovieCard