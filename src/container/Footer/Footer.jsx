import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Gericht img" />
        <p className="p__opensans">"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt="spoon img" className="spoon__img" style={{ marginTop: '10' }} />
        
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00 AM to 12:00 AM</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 AM to 11:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights Reserved.</p>
    </div>

  </div>
);

export default Footer;
