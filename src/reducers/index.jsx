import {combineReducers} from 'redux'
import searchReducer from './searchReducer.jsx'

export default combineReducers({
    movies: searchReducer
})