import React from 'react';
import './App.css';
import TSRootApp from './noRedux/elements/TSRootApp';
import ReduxTSRootApp from './redux/elements/ReduxTSRootApp';

function App() {
  return (
    <div className="App">
      {
        process.env.REACT_APP_MODE === 'TS' && <TSRootApp /> 
      }
      {
        process.env.REACT_APP_MODE === 'TS+REDUX' && <ReduxTSRootApp />
      }
    </div>
  );
}

export default App;
