import React, { Fragment } from 'react';
import './Footer.css';
import logo from './Logo.png';
const Footer = () => {
  return (
    <Fragment>
      <div className="footerBottom">
        <div className="find footerPiece">
          <img src={logo} className="weblogo" alt="logo" />
          <p>
            <span> Phone</span> : +1 (562) 760-2180
          </p>
          <p className="footerText">
            <span> Address</span>: Meditate and Celebrate Inc 2997 E, <br />
            Pacific Coast Highway Signal Hill CA 90755 USA
          </p>
        </div>
        <div className="knowUs footerPiece">
          <span> GET TO KNOW US </span>
          <p>PRIVACY POLICY</p>
          <p>REFUND POLICY</p>
          <p>TERMS OF SERVICE</p>
        </div>
        <div className="information footerPiece">
          <span>INFORMATION</span>
          <p>ABOUT</p>
          <p>US</p>
          <p>MEDITATION</p>
          <p>YOGA</p>
          <p>ACCESSORIES</p>
          <p>TRAVEL</p>
          <p>ACCESSORIES</p>
          <p>BULK BUY</p>
          <p>PERSONAL</p>
          <p>COACHING</p>
        </div>
        {/* <div className="newsLetter footerPiece">hello</div> */}
      </div>
      <div className="copyRight">
        <hr />
        <p>2020, All rights reserved </p>
      </div>
    </Fragment>
  );
};

export default Footer;
