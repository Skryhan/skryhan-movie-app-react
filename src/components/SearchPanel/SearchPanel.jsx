import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortMovies } from '../../actions/searchActions'
import './SearchPanel.css'

export class SearchPanel extends Component {

    sortBy = (e) => {
        const sortByReleaseDate = document.querySelector('release')
        const sortByRating = document.querySelector('rating')
        if (sortByReleaseDate){
            sortByReleaseDate.addEventListener('click', () => {
                sortByReleaseDate.classList.add('active')
                sortByRating.classList.remove('active')
            })
        }
        if (sortByRating){
            sortByRating.addEventListener('click', () => {
                sortByRating.classList.add('active')
                sortByReleaseDate.classList.remove('active')
            })
        }

        this.props.sortMovies()
    }

    render() {

        const { movies } = this.props

        return (
            <div className='searchPanel'>
                <div className='searchPanel__content'>
                    <div className='serchPanel__amount'>
                        <p> {movies.movies.length} movies found</p>
                    </div>
                    <div className='serchPanel__sort'>
                        <span>Sort by</span>
                        <a href='#' className='release' onClick={this.sortBy}>release date</a>
                        <a href='#'className='rating' onClick={this.sortBy}>rating</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, {sortMovies})(SearchPanel)
