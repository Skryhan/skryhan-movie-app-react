import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Landing from './components/Landing/Landing.jsx'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Landing/>
            </div>
        )
    }
}

export default App
