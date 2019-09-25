import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'

class Complete extends Component {

    render(){
        const destinationList = this.props.destinations.map((destination, i) => <li key={ i }>{destination.location} {destination.completed ? <input id={destination.id}  type="hidden"></input> : null } </li>)
            return ( <div className="Complete">
                <h2> Where I've Been: </h2>  
                { this.props.loading ? <h3>Loading...</h3> : destinationList } 
                </div>
            )
    }
}

    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            destinations: state.destinationReducer.destinations.filter(destination => destination.completed),
            loading: state.destinationReducer.loading
        }
    }

    export default connect(mapStateToProps)(Complete)