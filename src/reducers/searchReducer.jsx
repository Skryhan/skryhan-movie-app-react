import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, SORT_MOVIES, LOADING} from '../actions/types'

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
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
                loading: false
            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie: action.payload,
                loading: false
        }
        case SORT_MOVIES:
            const sortedMovies = state.movies.map(a => a)
           return {
               sortBy: action.payload,
               movies: sortedMovies.sort((a,b)=> {
                   if (action.payload ==='rating'){
                       return b.vote_average - a.vote_average
                   }
                   if (action.payload ==='release date'){
                       return (  new Date(b.release_date) - new Date(a.release_date))

                   }

                })
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