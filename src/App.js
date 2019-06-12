import React from 'react';
import './App.css';
import BarChart from './BarChart'

function App() {
  return (
    <div className='App'>
      <div>
        <BarChart data={[5,10,1,3]} size={[500,500]} />
      </div>
    </div>
  );
}

export default App;
