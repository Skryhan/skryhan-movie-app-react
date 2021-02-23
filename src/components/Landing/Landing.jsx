import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Loading from './/../Loading/Loading'
import SearchForm from './/../SearchForm/SearchForm'
import MoviesContainer from './/../MoviesContainer/MoviesContainer'
import MovieInfo from '../MovieInfo/MovieInfo'

export class Landing extends Component {
    
    render() {
        const { loading } = this.props
       
        return (
            <div className='container'>
                <SearchForm />
                {loading ? <Loading /> : <MoviesContainer />}
                <Switch>
                    <Route exact path="/film/:id"><MovieInfo /></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default withRouter(connect(mapStateToProps)(Landing))