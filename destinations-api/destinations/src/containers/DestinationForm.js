import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDestination } from '../actions/destinations'

class DestinationForm extends Component {
    state = {
        location: '',
        completed: false,
        loading: false
    }

    handleOnChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    // handleOnCheckChange = e => {
    //     const { checked } = e.target
    //     this.setState({
    //         completed: checked
    //     })
    // }

    handleOnSubmit = e => {
        e.preventDefault()
        const destination = {...this.state }
        this.props.addDestination(destination)
        this.setState({
            location: '',
            completed: false,
            loading: false 
        })
    }

    render() {
        const {location, completed} = this.state
        return ( 
            <div>
                <form onSubmit = {this.handleOnSubmit} >
                    <input 
                    type="text"
                    name="location"
                    value={ location }
                    onChange={ this.handleOnChange }
                    /> 
                    <input
                    type="checkbox"
                    name="completed"
                    checked= { completed }
                    onChange={ this.handleOnChange }
                    />
                    <br />
                <button type='submit' > Add Destination </button> 
                </form >
            </div >
        )
    }
}

export default connect(null, { addDestination })(DestinationForm)