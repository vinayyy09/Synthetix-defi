import React from 'react'
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Info />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
