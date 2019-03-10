import React, { Component } from "react";
import BandeauHome from "../img/bandeau-home.jpg"
import Slider from '../components/slider'
import HomeContent from "../components/home-content"


class Home extends Component {
  render() {
    return <div>
      <Slider/>
      <HomeContent/>
      </div>;
  }
}


export default Home;