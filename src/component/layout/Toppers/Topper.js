import topper1 from '../images/topper1.png';
import topper2 from '../images/topper2.png';
import topper3 from '../images/topper3.png';
import topper4 from '../images/topper4.png';
import './Topper.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Topper extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '100px',
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="topperContainer">
        <Slider {...settings}>
          <div className="topImg">
            <img src={topper1} alt="topperImg" />
          </div>
          <div className="topImg">
            <img src={topper2} alt="topperImg" />
          </div>
          <div className="topImg">
            <img src={topper3} alt="topperImg" />
          </div>
          <div className="topImg">
            <img src={topper4} alt="topperImg" />
          </div>
        </Slider>
      </div>
    );
  }
}
