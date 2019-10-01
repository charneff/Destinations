import React, { Component } from 'react'
import Items from '../components/Items'
import { getItems } from '../actions/items'
import { connect } from 'react-redux'

class ItemContainer extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                <Items/>
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


export default connect(mapStateToProps, { getItems })(ItemContainer)
