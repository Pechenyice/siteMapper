import React from 'react';
import './App.css';
import TSRootApp from './noRedux/elements/TSRootApp';

function App() {
  return (
    <div className="App">
      {
        process.env.REACT_APP_MODE === 'TS' && <TSRootApp /> 
      }
      {
        process.env.REACT_APP_MODE === 'TS+REDUX' && null //redux version
      }
    </div>
  );
}

export default App;
