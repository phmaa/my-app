import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact Me</h2>
      <FontAwesomeIcon icon={['fab', 'github']} />
      <a href="#" target="_blank"> GitHub</a>
    </footer>
  );
}

export default Footer;
