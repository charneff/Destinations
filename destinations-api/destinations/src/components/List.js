import React, { Component } from 'react'
import { connect } from 'react-redux'


class List extends Component {
    render(){
        const itemList = this.props.destinations.map((destination, i) => <li key={ i }>{destination.location} {destination.completed ? <input id={destination.id}  type="hidden"></input> : null } </li>)
            return ( <div className="Items">
                <h2> All Bucket List Items</h2>  
                { this.props.loading ? <h3>Loading...</h3> : itemList } 
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

export default connect(mapStateToProps)(List)