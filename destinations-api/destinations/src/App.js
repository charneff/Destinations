import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getDestinations } from './actions/destinations'
import Home from './containers/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Complete from './components/Complete'
import Incomplete from './components/Incomplete'
import DestinationForm from './components/DestinationForm'
import Navbar from './components/Navbar'
import List from './containers/List'


class App extends Component {

    componentDidMount() {
        this.props.getDestinations()
    }

    render(){
        return ( 
            <Router>
                <Navbar />
                <div className="App"> 
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/completed' component={Complete} />
                        <Route exact path='/incomplete' component={Incomplete} />
                        <Route exact path='/newdestination' component={DestinationForm} />
                        <Route exact path='/alldestinations' component={List} />
                    </Switch>
                </div>
            </Router>
            // <div className="App"> 
            //     <DestinationContainer />
            // </div>
        )
    }
}

    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            destinations: state.destinationReducer.destinations,
            loading: state.destinationReducer.loading
        }
    }

    export default connect(mapStateToProps, { getDestinations})(App)