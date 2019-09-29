import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'

class Complete extends Component {

    render(){
        const completedItemList = this.props.items.map((item, i) => <li key={ i }>{item.location} {item.description} {item.completed ? <input id={item.id}  type="hidden"></input> : null } </li>)
            return ( <div className="Complete">
                <h2>Did It:</h2>  
                { this.props.loading ? <h3>Loading...</h3> : completedItemList } 
                </div>
            )
    }
}

    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            items: state.destinationReducer.destinations.filter(item => item.completed),
            loading: state.destinationReducer.loading
        }
    }

    export default connect(mapStateToProps)(Complete)