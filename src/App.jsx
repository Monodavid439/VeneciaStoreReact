import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from  './pages/Home';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;




