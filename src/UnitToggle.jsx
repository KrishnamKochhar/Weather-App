import React from 'react';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="unit-toggle">
      <button onClick={onToggle}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default UnitToggle;