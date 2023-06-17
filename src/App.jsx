import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import bgImage from './assets/bg.jpg';
import Navbar from './components/Navbar';

AOS.init();

function App() {

  return (
    <div className="min-h-screen"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Header></Header>
      <Navbar></Navbar>
    </div>
  )
}

export default App
