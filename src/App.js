import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import StickyLinks from './components/StickyLinks';
import Rooms from './pages/Rooms';
import Footer from './components/Footer';
import OurServices from './pages/OurServices';
import CandDo from './pages/CandDo';
import Contactus from './pages/Contactus';
import Gallery from './pages/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
    <Navbar/>
    <StickyLinks/>
    <Home/>
    <About/>
    <Rooms/>
    <OurServices/>
    <Gallery/> 
    <CandDo/>
    <Contactus/>
    <Footer/>
    </Router>
  )
}

export default App;
