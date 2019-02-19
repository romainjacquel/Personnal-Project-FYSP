import React, { Component } from "react";
import {allSports} from "../components/app"
import {Link} from "react-router-dom"


class Sports extends Component {



  
  render() {
    return (
      <div className="container">
      {
        allSports.map((sport)=>
        <div className="card">
        <div className="card-body">
        <h3 className="card-title">{sport.name}</h3>
        <Link to={`${sport.name}/${sport.idSport}`} className="btn btn-primary">Voir les annonces</Link>
        </div>
        </div>
        )
      }
      </div>
    );
  }
}

export default Sports;
