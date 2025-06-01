// src/components/DuelGrid.jsx
import React, { useState } from 'react';
import DuelCard from './DuelCard';

const duels = [
  { id: 1, theme: 'Education vs. Health', image: '', text: 'Education vs. Health' },
  { id: 2, theme: 'Environment vs. Poverty', image: '', text: 'Environment vs. Poverty' },
  { id: 3, theme: 'Education vs. Health', image: '', text: 'Education vs. Health' },
  { id: 4, theme: 'Environment vs. Poverty', image: '', text: 'Environment vs. Poverty' },
  { id: 5, theme: 'Education vs. Health', image: '', text: 'Education vs. Health' },
  { id: 6, theme: 'Environment vs. Poverty', image: '', text: 'Environment vs. Poverty' },
];

const DuelGrid = () => {
  const [filter, setFilter] = useState('');

  const filteredDuels = filter
    ? duels.filter((d) => d.theme === filter)
    : duels;

  return (
    <div className="duel-grid-wrapper">
      <h2 className="duel-grid-title">Vote For Your Cause</h2>
      <div className="filter-wrapper">
        <label htmlFor="theme-filter">Filter by Theme: </label>
        <select
          id="theme-filter"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="">All</option>
          <option value="Education vs. Health">Duel of the Week: Education vs. Health</option>
          <option value="Environment vs. Poverty">Duel of the Week: Environment vs. Poverty</option>
        </select>
      </div>
      <div className="duel-grid">
        {filteredDuels.map((duel) => (
          <DuelCard key={duel.id} image={duel.image} text={duel.text} />
        ))}
      </div>
    </div>
  );
};

export default DuelGrid;
