import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './/../MovieCard/MovieCard'
import SearchPanel from '../SearchPanel/SearchPanel'

export class MoviesContainer extends Component {
    render() {
        const movies  = this.props.filteredM
        let content = ''

        content = movies.length > 0 ? movies.map((movie, index) => ( <MovieCard key={index} movie={movie} />))
            : null;
        return ( movies.length > 0 ? <div className='row'> <SearchPanel />{content}</div> : null)
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    filteredM: state.movies.filteredM
})

export default connect(mapStateToProps)(MoviesContainer)
