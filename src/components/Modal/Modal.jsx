import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie, setLoading } from '../../actions/searchActions'
import Loading from '../Loading/Loading'
import './Modal.css'

import { withRouter } from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'



export class Modal extends Component {

    constructor() {
        super()
        this.modalRef = React.createRef()
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
        const { isModal } = this.props

        if (isModal) {
            disableBodyScroll(this.modalRef.current)
        }
    }

    componentWillUnmount() {
        enableBodyScroll(this.modalRef.current)
    }

    render() {
        const { loading, movie } = this.props
        let movieInfo

        if (this.props.isModal) {
            movieInfo =
                <div ref={this.modalRef} className='modal__wrapper'
                    onClick={() => this.props.history.goBack()}>
                    <div className='modal' onClick={e => e.stopPropagation()}>
                        <h3 className='movie__title'>{movie.title}</h3>
                        <p className='movie__genre'>{movie.genres}</p>
                        <p className='movie__description'>{movie.overview}</p>
                        <p className='movie__popularity'>Popularity: {movie.vote_average}</p>
                        <p className='movie__budget'>Budget: ${movie.budget}</p>
                    </div>
                </div>
        } else {
            movieInfo =
                <div className='no__modal__wrapper'>
                    <div className='modal'>
                        <h3 className='movie__title'>{movie.title}</h3>
                        <p className='movie__genre'>{movie.genres}</p>
                        <p className='movie__description'>{movie.overview}</p>
                        <p className='movie__popularity'>Popularity: {movie.vote_average}</p>
                        <p className='movie__budget'>Budget: ${movie.budget}</p>
                    </div>
                </div>

            /* let movieInfo = (
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
            ) */

            let content = loading ? <Loading /> : movieInfo

            return <div>{content}</div>
        }
    }
}
const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default withRouter(connect(mapStateToProps, { fetchMovie, setLoading })(Modal))
