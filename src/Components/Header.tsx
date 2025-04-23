import React from 'react';
import './Header.css';  // Asegúrate de tener el archivo de estilos adecuado
import './Header';

const Header = () => {
  return (
    <header className="header">
      <img src="/src/assets/venecia-logo.avif" alt="Venecia Store" className="logo" />
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/products">Productos</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
