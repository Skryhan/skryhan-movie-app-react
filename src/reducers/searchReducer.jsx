import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES, LOADING} from '../actions/types'

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    filteredM: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return{
                ...state,
                movies: action.payload,
                loading: false,
                filteredM: action.payload
            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie: action.payload,
                loading: false
        }
        case SORT_MOVIES:
           return {
               ...state,
               sort: action.payload.sort,
               filteredM: action.payload.movies
            }
        case LOADING:
            return{
                ...state,
                loading: true,
        }
        default: 
            return state
    }
}