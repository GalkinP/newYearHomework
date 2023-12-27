import React, { useState } from 'react';

import './App.css';
import FoodList from './components/Food/FoodList';

function App(): JSX.Element {
  
  return (
    <div className="App">
    <FoodList/>
    </div>
  );
}

export default App;
