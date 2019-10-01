import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemForm from './containers/ItemForm'
import Navbar from './components/Navbar'
import ItemContainer from './containers/ItemContainer'
import Accomplishments from './components/Accomplishments'
import Events from './components/Events'
import Destinations from './components/Destinations'


const App = (props) => {
    return ( 
        <Router>
            <div className="Nav">
                <Navbar/>
            </div>
            
            <div className="App"> 
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/items/new' component={ItemForm} />
                    <Route exact path='/items' component={ItemContainer} />
                    <Route exact path='/items/accomplishments' component={Accomplishments}/>
                    <Route exact path='/items/destinations' component={Destinations}/>
                    <Route exact path='/items/events' component={Events}/> 
                </Switch>
            </div>
        </Router>
    )
}

export default App