import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getDestinations } from './actions/destinations'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Complete from './components/Complete'
import Incomplete from './components/Incomplete'
import ItemForm from './containers/ItemForm'
import Navbar from './components/Navbar'
import List from './components/List'
import ItemContainer from './containers/ItemContainer'


class App extends Component {

    componentDidMount() {
        this.props.getDestinations()
    }

    render(){
        return ( 
            <Router>
                <div className="Nav">
                    <Navbar/>
                </div>
                
                <div className="App"> 
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/items/completed' component={Complete} />
                        <Route exact path='/items/incomplete' component={Incomplete} />
                        <Route exact path='/items/new' component={ItemForm} />
                        <Route exact path='/items' component={ItemContainer} />
                        {/* <Route exact path='/items/destinations' component={DestinationContainer}/>
                        <Route exact path='/items/accomplishments' component={AccomplishmentContainer}/>
                        <Route exact path='/items/events' component={EventContainer}/> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

    const mapStateToProps = (state) => {
        console.log("I am state", state)
        return {
            destinations: state.destinationReducer.destinations,
            loading: state.destinationReducer.loading
        }
    }

    export default connect(mapStateToProps, { getDestinations})(App)