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
            to='/'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Home</NavLink>

            <NavLink
            to='/destinations/completed'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Places I've Been</NavLink>

            <NavLink
            to='/destinations/incomplete'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Places to Go</NavLink>

            <NavLink
            to='/destinations/new'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >Add Destination</NavLink>

            <NavLink
            to='/destinations'
            exact
            style={link}
            activeStyle={{background: 'black'}}
            >All Destinations</NavLink>
        </div>
    )
}

export default Navbar 