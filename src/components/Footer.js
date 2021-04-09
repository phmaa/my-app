import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <div>            
        <a href="https://github.com/phmaa" target="_blank"> <FontAwesomeIcon icon={['fab', 'github']} /></a>               
        <a href="https://www.linkedin.com/in/hwey-maa-2762a020b/" target="_blank"> <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>

    </footer>
  );
}

export default Footer;
