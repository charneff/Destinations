import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/items'

class ItemForm extends Component {
    state = {
        title: '',
        completed: false,
        description: '',
        category: '',
        loading: false
    }

    handleOnChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const item = {...this.state }
        this.props.addItem(item)
        this.setState({
            title: '',
            completed: false,
            description: '',
            category: '',
            loading: false 
        })
    }

    render() {
        const {title, completed, description, category} = this.state
        return ( 
            <div>
                <h2>Add an Item to Bucket List!</h2>
                <form onSubmit = {this.handleOnSubmit} >
                <h6>Select a Category</h6>
                    <select value={ category } name="category" onChange={ this.handleOnChange }>
                        <option value="null"></option>
                        <option value="destination">Destination</option>
                        <option value="accomplishment">Accomplishment</option>
                        <option value="event">Event</option>
                    </select>
                    <h6>Check box if completed!</h6>
                    <input 
                    type="text"
                    name="title"
                    value={ title }
                    onChange={ this.handleOnChange }
                    /> 
                    <input
                    type="checkbox"
                    name="completed"
                    checked= { completed }
                    onChange={ this.handleOnChange }
                    />
                    <br />
                    <h5>Enter specifics about your Bucket List Item here. </h5>
                    <textarea
                    name="description"
                    value={ description }
                    onChange={ this.handleOnChange }
                    /> 
                    <br />
                <button type='submit'> Add Item </button> 
                </form>
            </div >
        )
    }
}

export default connect(null, { addItem })(ItemForm)