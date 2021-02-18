import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import MovieInfo from './components/MovieInfo/MovieInfo'
import './App.css'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/movie/:id" component={MovieInfo} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
