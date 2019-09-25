import React, { Component } from 'react'
import Complete from '../components/Complete'
import Incomplete from '../components/Incomplete'

class List extends Component {
    render() {
        return (
            <div>
                <Incomplete />
                <Complete />
            </div>
        )
    }
}

export default List