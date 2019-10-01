import React, { Component } from 'react'
import Events from '../components/Events'
import { getItems } from '../actions/items'
import { connect } from 'react-redux'

class EventContainer extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                <Events/>
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


export default connect(mapStateToProps, { getItems })(EventContainer)