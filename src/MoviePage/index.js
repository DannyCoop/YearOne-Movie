import React from 'react'

function MoviePage(props) {
    return(
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}/>
                <h3>{props.movie.title}</h3>
                <p>Director</p>
            </div>
            <p>Desricption</p>
        </div>
    )
}

export default MoviePage