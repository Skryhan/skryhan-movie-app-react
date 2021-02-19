import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Modal from './components/Modal/Modal'
import './App.css'
import store from './store'

class App extends Component {
    constructor(props) {
        super(props)
        this.previousLocation = this.props.location
    }

    componentWillUpdate() {
        let { location } = this.props

        if (!(location.state && location.state.modal)) {
            this.previousLocation = location
        }
    }
    
    render() {
        const { location } = this.props
        const isModal = (
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        )
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Switch location={isModal ? this.previousLocation : location}>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/film/:id"><Modal isModal={isModal} /></Route>
                        </Switch>
                        {isModal
                            ? <Route exact path="/film/:id"><Modal isModal={isModal} /></Route>
                            : null
                        }
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default withRouter(App)
