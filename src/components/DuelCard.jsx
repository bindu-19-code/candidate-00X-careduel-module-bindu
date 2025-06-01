// src/components/DuelCard.jsx
import React from 'react';
import confetti from 'canvas-confetti';

const DuelCard = ({ image, text }) => {
  const handleVote = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="duel-card">
      <div className="duel-image">
        {image ? <img src={image} alt="duel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
      </div>
      <p className="duel-text">{text}</p>
      <button className="vote-btn button-solid" onClick={handleVote}>
        Vote Now
      </button>
    </div>
  );
};

export default DuelCard;
