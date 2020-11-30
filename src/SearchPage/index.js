import React, {useState} from 'react'
import MovieCard from '../MovieCard'
import './SearchPage.css'

function SearchPage() {

    const [searchResult, setSearchResult] = useState("")
    const [pageNum, setPageNum] = useState('1')
    const [ movieList, setMoveList] = useState([])

    const handleChange = (e) => {
        setSearchResult(e.target.value)
    }

    const ShowMovie = () => {
        return movieList.map(movie => <MovieCard
            movie = {movie}
            // title = {movie.title}
            // poster = {movie.poster_path}
            
        />)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("https://api.themoviedb.org/3/search/movie?api_key=c6b6081cc055c927d5cedc00ab4db4b6&language=en-US&query="+ searchResult +"&page="+ pageNum +"&include_adult=false")
        .then(res => res.json())
        .then(json => {
            setMoveList(json.results)
            setSearchResult("")
            console.log(movieList)
        })

    }

    const lastPage = () => {
        if(pageNum > 1) {
            setPageNum(pageNum - 1)
            fetch("https://api.themoviedb.org/3/search/movie?api_key=c6b6081cc055c927d5cedc00ab4db4b6&language=en-US&query="+ searchResult +"&page="+ pageNum +"&include_adult=false")
            .then(res => res.json())
            .then(json => {
                setMoveList(json.results)
                console.log(movieList)
            })
        }

    }

    const nextPage = () => {
        setPageNum(pageNum + 1)
        fetch("https://api.themoviedb.org/3/search/movie?api_key=c6b6081cc055c927d5cedc00ab4db4b6&language=en-US&query="+ searchResult +"&page="+ pageNum +"&include_adult=false")
        .then(res => res.json())
        .then(json => {
            setMoveList(json.results)
            console.log(movieList)
        })
    }

    return(
        <div className="MainContainer">
            Danny's movie thing!
           <form onSubmit={(e) => handleSubmit(e)}>
               <input onChange={(e) => handleChange(e)} name="search" type="text" placeholder="Search"/>
               <button type="submit">Search</button>
           </form>
           <br/>
           <br/>
           <br/>
           <div className="movies-being-shown">
                {ShowMovie()}
           </div>
           <div className="nextPage">
                <button onClick={() => lastPage()}> Last Page</button>
                |
                <button onClick={() => nextPage()}>Next Page</button>
           </div>
        </div>
    )
}

export default SearchPage