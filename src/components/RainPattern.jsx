import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import './RainPattern.css';

const RainPattern = ({ rows, cols }) => {
  const [grid, setGrid] = useState(Array(rows).fill().map(() => Array(cols).fill(null)));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = prevGrid.map(row => row.slice());

        // Move raindrops down
        for (let i = rows - 1; i >= 0; i--) {
          for (let j = 0; j < cols; j++) {
            if (i === 0) {
              if (Math.random() > 0.95 && newGrid[0][j] === null) {
                // Create a new raindrop at the top
                for (let k = 0; k < 5; k++) {
                  if (newGrid[k][j] === null) {
                    newGrid[k][j] = getLightColor(k);
                  }
                }
              }
            } else {
              if (newGrid[i - 1][j] !== null) {
                // Move raindrop down
                newGrid[i][j] = getDarkColor(newGrid[i - 1][j]);
                newGrid[i - 1][j] = null;
              }
              else if(i == rows -1){
                newGrid[i][j] = null ; 
              }
            }
          }
        }

        return newGrid;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [rows, cols]);

  const getLightColor = (position) => {
    const baseIntensity = 255; // Maximum intensity for RGB values
    const intensity = baseIntensity - position * 25; // Decrease intensity by 25 for each cell up

    // Ensure intensity stays within valid RGB range (0 to 255)
    const clampedIntensity = Math.max(0, Math.min(baseIntensity, intensity));

    // Generate RGB color string with the same intensity for R, G, and B
    return `rgb(${clampedIntensity}, ${clampedIntensity}, ${clampedIntensity})`;
  };

  const getDarkColor = (color) => {
    const colorMap = {
      'rgb(255, 255, 255)': 'rgb(200, 200, 200)',
      'rgb(200, 200, 200)': 'rgb(150, 150, 150)',
      'rgb(150, 150, 150)': 'rgb(100, 100, 100)',
      'rgb(100, 100, 100)': 'rgb(50, 50, 50)',
      'rgb(50, 50, 50)': 'rgb(0, 0, 0)'
    };

    return colorMap[color] || color;
  };

  return <Grid rows={rows} cols={cols} grid={grid} />;
};

export default RainPattern;
