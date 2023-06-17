import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';

AOS.init();

function App() {

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
