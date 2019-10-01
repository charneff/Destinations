import React, { Component } from 'react'
import { connect } from 'react-redux'


class List extends Component {
    render(){
        const itemList = this.props.items.map((item, i) => <li key={ i }>{item.location} {item.completed ? <input id={item.id}  type="hidden"></input> : null } </li>)
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
        items: state.itemReducer.items,
        loading: state.itemReducer.loading
    }
}

export default connect(mapStateToProps)(List)