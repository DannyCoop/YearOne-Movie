import React from 'react'

function InfoPage(props) {
    return(
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}/>
                <h3>{props.movie.title}</h3>
                <p>Director</p>
                {console.log("this is props", props)}
            </div>
            <p>Desricption</p>
        </div>
    )
}

export default InfoPage