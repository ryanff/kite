import React from 'react';
import './App.css';
import { TopContainer } from './components/top/top';
import { MidContainer } from './components/mid/mid';
import { BottomContainer } from './components/bottom/bottom';

function App() {
  return (
    <div className="App">
      <TopContainer />
      <MidContainer />
      <BottomContainer />
    </div>
  );
}

export default App;
