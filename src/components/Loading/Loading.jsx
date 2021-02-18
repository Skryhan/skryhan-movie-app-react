import React from 'react'
import spinner from './spinner.gif'
import './Loading.css'

function Loading() {
    return (
        <div className='loading'>
            <img src={spinner} alt='Loading...'/>
        </div>
    )
}

export default Loading
