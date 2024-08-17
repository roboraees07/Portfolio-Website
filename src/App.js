import React, { useState, useEffect } from 'react';
import MainRoute from './routes/MainRoute';
import './App.css'; // Import CSS for styling
import logo from './content/favicon.ico'; // Your logo image

function App() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading percentage increment
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 30); // Adjust the speed of the percentage loading

    // When loading is done, show the main content after a brief delay
    if (loadingPercentage === 100) {
      setTimeout(() => setIsLoading(false), 500); // Small delay before removing splash screen
    }

    return () => clearInterval(interval); // Cleanup the interval
  }, [loadingPercentage]);

  return (
    <>
      {isLoading ? (
        <div className="splash-screen">
          <img src={logo} alt="Logo" className="splash-logo" />
          <h1 className="splash-text">Welcome to My Portfolio</h1>
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${loadingPercentage}%` }}></div>
          </div>
          <p className="loading-percentage">{loadingPercentage}%</p>
        </div>
      ) : (
        <MainRoute />
      )}
    </>
  );
}

export default App;
