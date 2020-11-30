import React from 'react'
import './MovieCard.css'

function MovieCard(props){
    return(
        <div className="MovieCard">
            <img src={`https://image.tmdb.org/t/p/original${props.poster}`}/>
            <h3>{props.title}</h3>
            {console.log(props)}
        </div>
    )
}

export default MovieCard