import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES, LOADING} from './types'
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
export const sortMovies = () => dispatch => {
  dispatch({
      type: SORT_MOVIES
  })
}
  