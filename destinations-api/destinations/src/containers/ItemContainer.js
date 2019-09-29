import React, { Component } from 'react'
import Incomplete from '../components/Incomplete'
import Complete from '../components/Complete'

class ItemContainer extends Component {
    render() {
        return (
            <div>
                <Incomplete/>
                <Complete/>
            </div>
        )
    }
}

export default ItemContainer
