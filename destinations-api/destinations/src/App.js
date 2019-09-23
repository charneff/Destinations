import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getDestinations } from './actions/destinations'
import DestinationForm from './containers/DestinationForm'

class App extends Component {

    componentDidMount() {
        this.props.getDestinations()
    }

    render(){
        const destinations = this.props.destinations.map((destination, i) => <li key={ i }>{destination.location} - {destination.completed ? "Been there" : "Waiting to go"} </li>)
            return ( <div className="App">
                <h2> Create Destination </h2>  
                <DestinationForm /> 
                <hr />
                <h2> Places to Go: </h2>  
                { this.props.loading ? <h3>Loading...</h3> : destinations } 
                </div>
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

    export default connect(mapStateToProps, { getDestinations })(App)