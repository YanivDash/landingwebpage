import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import product1 from '../images/bproduct.jpg';
import product2 from '../images/bproduct2.jpg';
import product3 from '../images/bproduct3.jpg';
import product4 from '../images/bproduct4.jpg';
import product5 from '../images/bproduct5.jpg';
import product6 from '../images/bproduct6.jpg';
import product7 from '../images/bproduct7.jpg';
import { Button } from '../Buttons/Button';
import './Gallery.css';

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      swipeToSlide: true,
      adaptiveHeight: true,
      variableWidth: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slide-container">
        <h2 className="bestHeading"> Best Selling Product </h2>
        <Slider {...settings}>
          <div className="cardImg">
            <img src={product2} className="productImg" alt="productImg" />
            <p className="bestSub">Friends of Medication Back Jack ...</p>
            <Button content="Select Options" />
          </div>
          <div className="cardImg">
            <img src={product4} className="productImg" alt="productImg" />
            <p className="bestSub">Friends of Medication Extra large ...</p>
            <Button content="Select Options" />
          </div>
          <div className="cardImg">
            <img src={product5} className="productImg" alt="productImg" />
            <p className="bestSub">
              Friends of Medication BackBending Bench ...
            </p>
            <Button content="Select Options" />
          </div>
          <div className="cardImg">
            <img src={product6} className="productImg" alt="productImg" />
            <p className="bestSub">Friends of Medication 100%...</p>
            <Button content="Select Options" />
          </div>
          <div className="cardImg">
            <img src={product7} className="productImg" alt="productImg" />
            <p className="bestSub">Friends of Medication Backless Chair...</p>
            <Button content="Select Options" />
          </div>
        </Slider>
      </div>
    );
  }
}
