import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: "none",
    color: 'white'
}

const Navbar = () => {
    return(
        <div>
            <NavLink
            to='/'
            exact
            style={link}
            activeStyle={{background: 'blue'}}
            >Home</NavLink>

            <NavLink
            to='/completed'
            exact
            style={link}
            activeStyle={{background: 'blue'}}
            >Places I've Been</NavLink>

            <NavLink
            to='/incomplete'
            exact
            style={link}
            activeStyle={{background: 'blue'}}
            >Places to Go</NavLink>

            <NavLink
            to='/newdestination'
            exact
            style={link}
            activeStyle={{background: 'blue'}}
            >Add Destination</NavLink>

            <NavLink
            to='/alldestinations'
            exact
            style={link}
            activeStyle={{background: 'blue'}}
            >All Destinations</NavLink>
        </div>
    )
}

export default Navbar 