import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Project from './components/Projects';
import Footer from './components/Footer';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { icon, InLineIcon } from '@iconify/react'
import externalLinkAlt from '@iconify-icons/fa-solid/external-link-alt'
library.add(fab, fas, faExternalLinkAlt )

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
