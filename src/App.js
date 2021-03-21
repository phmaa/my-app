import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Project from './components/Projects';
import Footer from './components/Footer';

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
