import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { completeItem } from '../actions/items'

const Accomplishments = (props) => {
    const complete = e => {
        const item = props.incompleteAccomplishments.find(d => d.id === parseInt(e.target.id))
        props.completeItem(item)
    }

    const completedItems = props.completedAccomplishments.map((item, i) => <li key={ i }>{item.location} {item.completed ? null : <input type="checkbox" id={item.id} onChange={complete}></input> } </li>)
    const incompleteItems = props.incompleteAccomplishments.map((item, i)=> <li key={ i }>{item.location} {item.completed ? null : <input type="checkbox" id={item.id} onChange={complete}></input> } </li>)
        return ( <div className="Accomplishments">
            <h2>Accomplishments:</h2>  

            <h3>Still to Achieve:</h3>
            { props.loading ? <h3>Loading...</h3> : incompleteItems } 
            <h3>Got it Done:</h3>
             { props.loading ? <h3>Loading...</h3> : completedItems } 
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
        completedAccomplishments: state.itemReducer.items.filter(item => item.completed && item.category === "accomplishment"),
        incompleteAccomplishments: state.itemReducer.items.filter(item => !item.completed && item.category === "accomplishment"),
        loading: state.itemReducer.loading
    }
}


export default connect(mapStateToProps, { completeItem })(Accomplishments)