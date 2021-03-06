import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { completeItem } from '../actions/items'

const Destinations = (props) => {
    const complete = e => {
        const item = props.incompleteDestinations.find(d => d.id === parseInt(e.target.id))
        props.completeItem(item)
    }

    const completedItems = props.completedDestinations.map((item, i) => <li key={ i }><b>{item.title}</b>{item.completed ? null : <input type="checkbox" id={item.id} onChange={complete}></input> } <br/>{item.description}<br/><br/></li>)
    const incompleteItems = props.incompleteDestinations.map((item, i)=> <li key={ i }><b>{item.title}</b> {item.completed ? null : <input type="checkbox" id={item.id} onChange={complete}></input> } <br/>{item.description}<br/><br/></li>)
        return ( <div className="Destinations">
            <h2>Destinations:</h2>  

            <h3><u>Dying to Go:</u></h3>
            { props.loading ? <h3>Loading...</h3> : incompleteItems } 
            <h3><u>Saw it:</u></h3>
                { props.loading ? <h3>Loading...</h3> : completedItems } 
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
        completedDestinations: state.itemReducer.items.filter(item => item.completed && item.category === "destination"),
        incompleteDestinations: state.itemReducer.items.filter(item => !item.completed && item.category === "destination"),
        loading: state.itemReducer.loading
    }
}


export default connect(mapStateToProps, { completeItem })(Destinations)
