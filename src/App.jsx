// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DuelGrid from './components/DuelGrid';  // Import DuelGrid component
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--primary-color)' }}>
          Welcome to CareDuel
        </h1>
        <p>This is the UI shell — ready for Duels!</p>
        {/* Add DuelGrid here */}
        <DuelGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
