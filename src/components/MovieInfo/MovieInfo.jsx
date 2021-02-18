import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie, setLoading } from '../../actions/searchActions'
import Loading from './/../Loading/Loading'
import './MovieInfo.css'

export class MovieInfo extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
    }

    render() {
        const { loading, movie } = this.props

        let movieInfo = (
            <div className='modal'>
                <div className='movie__img'><img src={movie.poster_path}></img></div>
                <div className='modal__content'>
                    <h3 className='movie__title'>{movie.title}</h3>
                    <p className='movie__genre'>{movie.genres}</p>
                    <p className='movie__description'>{movie.overview}</p>
                    <p className='movie__popularity'>Popularity: {movie.vote_average}</p>
                    <p className='movie__budget'>Budget: ${movie.budget}</p>
                </div>
            </div>
        )

        let content = loading ? <Loading /> : movieInfo

        return <div>{content}</div>
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie, setLoading })(MovieInfo)
