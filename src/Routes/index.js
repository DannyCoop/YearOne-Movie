import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MoviePage from '../MoviePage';
import SearchPage from '../SearchPage';

function Routes() {
    return(
        <Switch>
            <Route exact path="/movies/:id">
                <MoviePage/>
            </Route>
            <Route exact path="/">
                <SearchPage/>
            </Route>
        </Switch>
    )
}

export default Routes