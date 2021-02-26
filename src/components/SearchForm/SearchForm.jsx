import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchMovies, setLoading, fetchMoviesByG } from '../../actions/searchActions'
import './SearchForm.css'

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value)
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.fetchMovies(this.props.text)
    this.props.setLoading()
    const titleActive = document.querySelector('#title')
    const genresActive = document.querySelector('#genres')
    const search = document.querySelector('#search')
    if (titleActive){
      titleActive.addEventListener('click', ()=>{
          titleActive.classList.add('active')
          genresActive.classList.remove('active')
      })
   }
    if (genresActive){
        genresActive.addEventListener('click', ()=>{
            genresActive.classList.add('active')
            titleActive.classList.remove('active')
        })
    }
    if (search){
      titleActive.classList.add('active')
      genresActive.classList.remove('active')
    }
  }
  onClick = (e) => {
    e.preventDefault();
    this.props.fetchMoviesByG(this.props.text)
    this.props.setLoading()
  }

  render() {
    return (
      <div className='search_bg'>
        <div className='search_box'>
          <div className='search_title'>find your movie</div>
          <form onSubmit={this.onSubmit}>
            <input type='text' onChange={this.onChange}></input>
          <div className='search_panel'>
            <div className='search_panel_left'>
              <div className='search_text'>search by</div>
              <button className='btn' id='title'>title</button>
              <button className='btn' id='genres' onClick={this.onClick}>genre</button>
            </div>
            <div className='search_panel_right'>
              <button id='search' type='submit' className='btn active search'>
                search
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
})

export default connect(mapStateToProps, { searchMovie, fetchMovies, fetchMoviesByG, setLoading })(SearchForm)
