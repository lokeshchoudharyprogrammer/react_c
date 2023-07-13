import React, { useState, useEffect } from 'react';

const CounterApp = ({ language }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${language}/count`);
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [language]);

  const increment = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${language}/increment`, {
        method: 'POST',
      });
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const decrement = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${language}/decrement`, {
        method: 'POST',
      });
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Counter App ({language.toUpperCase()})</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;
