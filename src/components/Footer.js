import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <div>      
        <FontAwesomeIcon icon={['fab', 'github']} />
        <a href="#" target="_blank"> GitHub</a>  
           
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
        <a href="#" target="_blank"> LinkedIn</a>
      </div>

    </footer>
  );
}

export default Footer;
