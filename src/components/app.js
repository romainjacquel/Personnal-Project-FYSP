import React, { Component } from 'react'
import Header from '../containers/header'
import Sports from '../containers/sports'
import Home from '../containers/home';
import Annonces from '../containers/annonces'
import notFound from './notFound'
import {Route,Switch} from 'react-router-dom'
require("../style.css");

export const allSports = [{idSport:1,name:"Football"},{idSport:2,name:"Fitness"},{idSport:3,name:"Running"}]


export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Home}/>
       <Route exact path='/sports' component={Sports}/>
       <Route exact path='/:name/:idSport' component={Annonces}/>
       <Route path="*" component={notFound}/>
       </Switch>
      </div>
    )
  }
}
