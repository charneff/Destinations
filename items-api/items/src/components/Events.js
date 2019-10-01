import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { completeItem } from '../actions/items'

const Events = (props) => {

    const complete = e => {
        const item = props.incompleteEvents.find(d => d.id === parseInt(e.target.id))
        props.completeItem(item)
    }

    
    const completedItems = props.completedEvents.map((item, i) => <li key={ i }><b>{item.title}</b>{item.completed ? null : <input type="checkbox" id={item.id} onChange={complete}></input> }<br/>{item.description}<br/><br/> </li>)
    const incompleteItems = props.incompleteEvents.map((item, i)=> <li key={ i }><b>{item.title}</b>{item.completed ? null : <input type="checkbox" id={item.id} onChange={complete}></input> }<br/>{item.description}<br/><br/> </li>)
       return ( <div className="Events">
            <h2>Events:</h2>  
            <h3><u>Waiting to Go:</u></h3>
            { props.loading ? <h3>Loading...</h3> : incompleteItems } 
            <h3><u>Attended:</u></h3>
                { props.loading ? <h3>Loading...</h3> : completedItems } 
            </div>
        )
}


const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
        completedEvents: state.itemReducer.items.filter(item => item.completed && item.category === "event"),
        incompleteEvents: state.itemReducer.items.filter(item => !item.completed && item.category === "event"),
        loading: state.itemReducer.loading
    }
}

export default connect(mapStateToProps, { completeItem })(Events)

