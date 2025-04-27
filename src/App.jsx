import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from  './pages/Home';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;




