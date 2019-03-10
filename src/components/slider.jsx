import React,{Component} from 'react';
import { Fade } from 'react-slideshow-image';
import Image1 from '../img/bandeau-home.jpg';
import Image2 from "../img/image-slide-2.jpg";
import Image3 from "../img/image-slider-3.jpg"
 
const fadeImages = [
    Image1,
    Image2,
    Image3
  ];
   
  const fadeProperties = {
    duration: 3500,
    transitionDuration: 750,
    infinite: false,
    indicators: true
  }
 
class Slider extends Component {

    render(){
        return (
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[0]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[1]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[2]} />
                </div>
              </div>
            </Fade>
          )
    }
    
}

export default Slider