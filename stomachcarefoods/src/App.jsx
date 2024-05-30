import React from 'react'
import Navbar from './components/Navbar';
import Search from './Search';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Home />
      <Footer />
      {/* other components */}
    </div>
  );
}

export default App;


