import React from 'react';
import Card from "../Components/Cards";
import "./Home.css";

const Home = () => {
  const products = [
    { title: 'Vestido short', description: 'Vestido short perfecto para la playa', price: 79.99, imageUrl: '/src/assets/enterizo Short.webp' },
    { title: 'Blusa', description: 'Blusa de dama con cuello ve y estampado de oso', price: 49.99, imageUrl: '/src/assets/images (9).jpg' },
    { title: 'Jean', description: 'moswand pantalon jean en todas las tallas', price: 130.00, imageUrl: '/src/assets/images (8).jpg' },
  ];

  return (
    <main className="home">
      <h2>Explora nuestros productos</h2>
      <div className="cards-container">
        {products.map((product, index) => (
          <Card 
            key={index} 
            title={product.title} 
            description={product.description} 
            price={product.price} 
            imageUrl={product.imageUrl} 
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
