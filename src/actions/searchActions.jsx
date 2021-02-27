import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES_BY_R, LOADING} from './types'
import axios from 'axios'

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get(`https://reactjs-cdp.herokuapp.com/movies?search=${text}&searchBy=title`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data.data
    }))
    .catch(err => console.log(err))
}

export const fetchMoviesByG = text => dispatch => {
  axios.get(`https://reactjs-cdp.herokuapp.com/movies?search=${text}&searchBy=genres`)
  .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data.data
  }))
  .catch(err => console.log(err))
}

export const fetchMovie = id => dispatch => {
    axios
      .get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then(response =>
        dispatch({
          type: FETCH_MOVIE,
          payload: response.data
        })
      )
      .catch(err => console.log(err))
  }

export const setLoading = () => {
    return {
      type: LOADING
    }
}
export const sortByR = (movies, sort) => dispatch => {
  const sortedMovies = movies.map(a => a)
  if (sort ==='rating'){
    sortedMovies.sort((a, b) => (b.vote_average - a.vote_average)) 
  }
  if (sort ==='release date'){
    sortedMovies.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date))) 
  }
  dispatch({
      type: SORT_MOVIES_BY_R,
      payload: {
        sort: sort,
        movies: sortedMovies,
      }
  })
}
  