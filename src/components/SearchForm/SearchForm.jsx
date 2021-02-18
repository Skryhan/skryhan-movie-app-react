import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from '../../actions/searchActions.jsx'
import './SearchForm.css'

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value)
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.fetchMovies(this.props.text)
    this.props.setLoading()
  }

  render() {
    return (
      <div className='search_bg'>
        <div className='search_box'>
          <div className='search_title'>find your movie</div>
          <form onSubmit={this.onSubmit}>
            <input type='text' onChange={this.onChange}></input>
          </form>
          <div className='search_panel'>
            <div className='search_panel_left'>
              <div className='search_text'>search by</div>
              <button className='btn'>title</button>
              <button className='btn'>genre</button>
            </div>
            <div className='search_panel_right'>
              <button type='submit' className='btn'>
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm
