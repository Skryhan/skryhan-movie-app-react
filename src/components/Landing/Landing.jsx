import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './/../Loading/Loading'
import SearchForm from './/../SearchForm/SearchForm'
import MoviesContainer from './/../MoviesContainer/MoviesContainer'

export class Landing extends Component {
    render() {
        const { loading } = this.props
        return (
            <div className='container'>
                <SearchForm />
                {loading ? <Loading /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing)