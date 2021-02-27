import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortByR } from '../../actions/searchActions'
import './SearchPanel.css'

export class SearchPanel extends Component {

    render() {
        return (
            <div className='searchPanel'>
                <div className='searchPanel__content'>
                    <div className='serchPanel__amount'>
                        <p>{this.props.filteredM.length} movies found</p>
                    </div>
                    <div className='serchPanel__sort' >
                        <span>Sort by</span>
                        <select className='select' value={this.props.sort}
                            onChange={(event) => {
                                this.props.sortByR(
                                    this.props.filteredM,
                                    event.target.value
                                )}}>
                            <option value=''>---</option>
                            <option value='rating'>Rating</option>
                            <option value='release date'>Release date</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    sort: state.movies.sort,
    filteredM: state.movies.filteredM
})

export default connect(mapStateToProps, { sortByR })(SearchPanel)
