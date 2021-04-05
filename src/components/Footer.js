import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <div>            
        <a href="#" target="_blank"> <FontAwesomeIcon icon={['fab', 'github']} /></a>               
        <a href="#" target="_blank"> <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>

    </footer>
  );
}

export default Footer;
