import React from 'react'
import './Header.css'
import bg from './bg.png'

class Header extends React.Component {
    render() {
        return (
            <div className='header_img'>
                <img src={bg} alt=''/>
            </div>
        )
    }
}

export default Header
