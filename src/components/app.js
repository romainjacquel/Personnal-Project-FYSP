import React, { Component } from 'react'
import Header from '../containers/header'
import Sports from '../containers/sports'
import Home from '../containers/home';
import Annonces from '../containers/annonces'
import AnnoncesDetail from '../containers/annonces-details'
import InscriptionOK from '../containers/inscriptionOK'
import Signin from "../components/signin"
import Signout from "../components/signout"
import Signup from "../components/signup"
import notFound from './notFound'
import {Route,Switch} from 'react-router-dom'
import CreateForm from "../containers/create-form"
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
       <Route exact path='/signin' component={Signin}/>
       <Route exact path='/signout' component={Signout}/>
       <Route exact path='/signup' component={Signup}/>
       <Route exact path='/create-form' component={CreateForm} />
       <Route exact path='/inscriptionOK' component={InscriptionOK}/>
       <Route exact path='/posts/:name/:idSport' component={Annonces}/>
       <Route exact path='/post/:id' component={AnnoncesDetail}/>
       <Route path="*" component={notFound}/>
       </Switch>
      </div>
    )
  }
}
