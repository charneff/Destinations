import React, { Component } from 'react'
import Accomplishments from '../components/Accomplishments'
import { getItems } from '../actions/items'
import { connect } from 'react-redux'

class AccomplishmentContainer extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                <Accomplishments/>
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


export default connect(mapStateToProps, { getItems })(AccomplishmentContainer)