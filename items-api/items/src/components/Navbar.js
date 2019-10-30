import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: "none",
    color: 'white'
}

const Navbar = () => {
    return(
        <div>
            <NavLink
            to='/home'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Home</NavLink>

            <NavLink
            to='/items/new'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Add New Item</NavLink>

            <NavLink
            to='/items'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >All Items</NavLink>

            <NavLink
            to='/items/destinations'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Destinations</NavLink>

            <NavLink
            to='/items/accomplishments'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Accomplishments</NavLink>

            <NavLink
            to='/items/events'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Events</NavLink>

        </div>
    )
}

export default Navbar
