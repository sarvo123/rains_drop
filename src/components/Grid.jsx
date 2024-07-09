import React from 'react';
import './Grid.css';

const Grid = ({ rows, cols, grid }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="grid-square"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
