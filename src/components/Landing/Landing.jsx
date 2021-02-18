import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchForm from '../SearchForm/SearchForm.jsx'

export class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <SearchForm />
            </div>
        )
    }
}

export default Landing