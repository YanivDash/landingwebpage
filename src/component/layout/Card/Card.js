import { Fragment } from 'react';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';

import './Cards.css';
import React from 'react';

const Cards = () => (
  <Fragment>
    <div className="cards">
      <div className="card">
        <div className="cardImage">
          <img className="pImg " src={product1} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img className="pImg img2" src={product2} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img className="pImg" src={product3} alt="" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img className="pImg" src={product4} alt="" />
        </div>
      </div>
    </div>

    <div className="about">
      <h2>About Us </h2>
      <p>
        {' '}
        We are passionate about meditation, yoga, and relaxation. Our work
        involves innovation-led manufacturing of an eccentric range of products
        that facilitate ease in practicing yoga and meditation techniques for
        beginners as well as experts.
      </p>
    </div>
  </Fragment>
);

export default Cards;
