import React, { FC } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Home from './pages/Home';
import Footer from './components/Footer';

const App: FC = () => {
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
