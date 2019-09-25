import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { completeDestination } from '../actions/destinations'

class Incomplete extends Component {
    complete = e => {
        const destination = this.props.destinations.find(d => d.id === parseInt(e.target.id))
        this.props.completeDestination(destination)
    }

    render(){
        const destinations = this.props.destinations.map((destination, i) => <li key={ i }>{destination.location} {destination.completed ? null : <input type="checkbox" id={destination.id} onChange={this.complete}></input> } </li>)
            return ( <div className="Complete">
                <h2> Places To Go: </h2>  
                { this.props.loading ? <h3>Loading...</h3> : destinations } 
                </div>
            )
    }
}

    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            destinations: state.destinationReducer.destinations.filter(destination => !destination.completed),
            loading: state.destinationReducer.loading
        }
    }

    export default connect(mapStateToProps, { completeDestination })(Incomplete)