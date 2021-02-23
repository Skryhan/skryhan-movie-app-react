import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie, setLoading } from '../../actions/searchActions'
import Loading from '../Loading/Loading'
import './MovieInfo.css'
import { withRouter, Link, Redirect } from 'react-router-dom'


export class MovieInfo extends Component {

    constructor(props){
        super(props)
        this.state = {currentKey: ''}
        this.handleKeyPress = this.handleKeyPress.bind(this)
      }
      handleKeyPress(e) {
        this.setState({currentKey: e.keyCode})
        if(e.keyCode === 27) {
            console.log('You just pressed Escape!')
            this.setState({referrer: '/'})
        }
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const {referrer} = this.state
        if (referrer) return <Redirect to={referrer} />

        const { loading, movie } = this.props
        let movieInfo = (
                <div className='modal__wrapper'>
                    <div className='modal' style={{ background: `linear-gradient(rgba(0,0,0,0.6),
    rgba(0,0,0,0.6)), url(${movie.poster_path}), center no-repeat` }}>
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

export default withRouter(connect(mapStateToProps, { fetchMovie, setLoading })(MovieInfo))
