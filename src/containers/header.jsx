import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends Component{

    render(){
      return(
        <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Accueil
          </Link>
        </li>
  
        <li className="nav-item">
          <Link className="nav-link" to="/sports">
            Nos sports
          </Link>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" href="#">
            Connexion
          </a>
        </li>
      </ul>
      )
    }
  }
  
 
  
  export default Header
  
