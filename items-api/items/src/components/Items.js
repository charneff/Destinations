import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { completeItem } from '../actions/items'

const Items = (props) => {
    const complete = e => {
        const item = props.incompleteItems.find(d => d.id === parseInt(e.target.id))
        props.completeItem(item)
    }

    const completedItems = props.completedItems.map((item, i) => <li key={ i }>{item.location} {item.description} <input id={item.id}  type="hidden"></input> </li>)
    const incompleteItems = props.incompleteItems.map((item, i) => <li key={ i }>{item.location} <input type="checkbox" id={item.id} onChange={complete}></input> </li>)
        return ( <div className="Complete">
            <h2>To Do:</h2>  
            { props.loading ? <h3>Loading...</h3> : incompleteItems } 
            <h2>Done:</h2>
            { props.loading ? <h3>Loading...</h3> : completedItems }
            </div>
        )
}


    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            completedItems: state.itemReducer.items.filter(item => !item.completed),
            incompleteItems: state.itemReducer.items.filter(item => item.completed),
            loading: state.itemReducer.loading
        }
    }

    export default connect(mapStateToProps, { completeItem })(Items)