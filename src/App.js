import React from 'react';
import CounterApp from './Componet/CounterApp';

const App = () => {
  return (
    <div>
      <CounterApp language="c++" />
      <CounterApp language="python" />
      <CounterApp language="ruby" />
      <CounterApp language="bash" />
      <CounterApp language="java" />
      <CounterApp language="php" />
      <CounterApp language="go" />
    </div>
  );
};

export default App;
