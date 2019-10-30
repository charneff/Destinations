import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemForm from './containers/ItemForm'
import Navbar from './components/Navbar'
import ItemContainer from './containers/ItemContainer'
import AccomplishmentContainer from './containers/AccomplishmentContainer'
import EventContainer from './containers/EventContainer'
import DestinationContainer from './containers/DestinationContainer'


const App = () => {
    return (
        <Router>
            <div className="Nav">
                <Navbar/>
            </div>

            <div className="App">
                <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/items/new' component={ItemForm} />
                    <Route exact path='/items' component={ItemContainer} />
                    <Route exact path='/items/accomplishments' component={AccomplishmentContainer}/>
                    <Route exact path='/items/destinations' component={DestinationContainer}/>
                    <Route exact path='/items/events' component={EventContainer}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
