import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // Function to fetch temperature from backend
    const fetchTemperature = () => {
      axios.get('http://localhost:5000/') // Your backend URL
        .then(response => {temperature
          setTemperature(response.data.temperature);
        })
        .catch(error => {
          console.error('Error fetching temperature:', error);
        });
    };

    fetchTemperature(); // call once when component loads
    const interval = setInterval(fetchTemperature, 3000); // refresh every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="App">
      <h1>🌡️ Smart Home Dashboard</h1>

      <div className="card">
        <h2>Temperature</h2>
        <p>{temperature !== null ? `${temperature}°C` : 'Loading...'}</p>
      </div>
    </div>
  );
}

export default App;
