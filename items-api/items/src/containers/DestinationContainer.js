import React, { Component } from 'react'
import Destinations from '../components/Destinations'
import { getItems } from '../actions/items'
import { connect } from 'react-redux'

class DestinationContainer extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                <Destinations/>
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


export default connect(mapStateToProps, { getItems })(DestinationContainer)