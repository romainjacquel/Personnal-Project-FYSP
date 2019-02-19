import React, { Component } from "react";
import BandeauHome from "../img/bandeau-home.jpg"
import HomeContent from "../components/home-content"


class Home extends Component {
  render() {
    return <div>
      <img src={BandeauHome}/>
      <HomeContent/>
      </div>;
  }
}

export default Home;