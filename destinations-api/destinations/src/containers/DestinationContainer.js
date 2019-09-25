import React, { Component } from 'react'
import DestinationForm from '../components/DestinationForm'
import List from './List'
import Navbar from '../components/Navbar'

class DestinationContainer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <DestinationForm /> 
                <hr />  
                <List />
            </div>
        )
    }
}

export default DestinationContainer
