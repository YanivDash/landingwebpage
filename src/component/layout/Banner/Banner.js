import React from 'react';
import { Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import yoga1 from './images/yoga1.jpg';
import yoga2 from './images/yoga2.jpg';
import yoga3 from './images/yoga3.jpg';
import { Button } from '../Buttons/Button';

function Banner() {
  return (
    <Fragment>
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <div className="imgHolder">
              <img className="d-block w-100" src={yoga1} alt="First slide" />
            </div>
            <Carousel.Caption>
              <h1 className="titleText">Medication Accessories</h1>
              <p className="subText">
                Medication Accessories That Connects You With The Devine
              </p>
              <Button content="Discover Now" className="disBtn" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgHolder">
              <img className="d-block w-100" src={yoga2} alt="Second slide" />
            </div>

            <Carousel.Caption>
              <h1 className="titleText">Second slide label</h1>
              <p className="subText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button content="Discover Now" className="disBtn" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgHolder">
              <img className="d-block w-100" src={yoga3} alt="Third slide" />
            </div>
            <Carousel.Caption>
              <h1 className="titleText">Third slide label</h1>
              <p className="subText">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button content="Discover Now" className="disBtn" />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
}

export default Banner;
