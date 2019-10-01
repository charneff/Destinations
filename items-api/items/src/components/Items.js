import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { completeItem, deleteItem } from '../actions/items'

const Items = (props) => {
    const complete = e => {
        const item = props.incompleteItems.find(d => d.id === parseInt(e.target.id))
        props.completeItem(item)
    }

    const deleteItem = (e) => {
        const item = props.items.find(d => d.id === parseInt(e.target.id))
        props.deleteItem(item)
    }

    const completedItems = props.completedItems.map((item, i) => <li key={ i }><b>{item.title} </b><input id={item.id}  type="hidden"></input><br/><button id={item.id} type="button" onClick={deleteItem}>Delete</button><br/><br/></li>)
    const incompleteItems = props.incompleteItems.map((item, i) => <li key={ i }><b>{item.title} </b><input type="checkbox" id={item.id} onChange={complete}></input><br/><button id={item.id} type="button" onClick={deleteItem}>Delete</button><br/><br/></li>)
        return ( <div className="Items">
            <h1>Bucket List!</h1>
            <h2><u>To Do:</u></h2>  
            { props.loading ? <h3>Loading...</h3> : incompleteItems } 
            <h2><u>Done:</u></h2>
            { props.loading ? <h3>Loading...</h3> : completedItems }
            </div>
        )
}


    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            items: state.itemReducer.items,
            completedItems: state.itemReducer.items.filter(item => item.completed),
            incompleteItems: state.itemReducer.items.filter(item => !item.completed),
            loading: state.itemReducer.loading
        }
    }

    export default connect(mapStateToProps, { completeItem, deleteItem })(Items)