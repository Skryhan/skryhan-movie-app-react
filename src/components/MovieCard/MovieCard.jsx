import React, { Component } from 'react'
import './MovieCard.css'
import { Link, withRouter } from 'react-router-dom'

export class MovieCard extends Component {

  render() {

    const { movie } = this.props

    return (
      <div className='movie__element'>
        <Link className='movie__link' to={{ pathname: '/film/' + movie.id, state: { modal: true } }}>
          <div className='movie__img'>
            <img src={movie.poster_path}></img>
          </div>
          <div className='movie__info'>
            <div className='movie__info__text'>
              <h4>{movie.title}</h4>
              <p>{movie.genres.join(' & ')}</p>
            </div>
            <div className='movie__info__year'>
              <p>{movie.release_date.slice(0, -6)}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(MovieCard)
