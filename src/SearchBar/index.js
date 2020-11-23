import React, {useState} from 'react'

function SearchBar() {

    const [searchBar, setSearchBar] = useState("marvel")
    const [ movieList, setMoveList] = useState([])

    const movieFetch = () =>{
        fetch("link here", {
            "method": "GET",
            "headers": {
                
            }
        })
        .then(res => res.json())
        .then(json => {
            setMoveList(json.Search) 
            console.log(movieList)
        })
    }

    return(
        <div>
            {movieFetch()}
            hey
            <form>
                <input>
                </input>
            </form>
        </div>
    )
}

export default SearchBar