import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
