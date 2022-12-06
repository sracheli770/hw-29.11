import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Para from './components/paragraph/Para';
import Image from './components/pictures/Image';
import SponserList from './components/sponsers/SponserList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Image />
      <div className="container">
        <Para />
        <SponserList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
