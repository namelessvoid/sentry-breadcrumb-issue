import React from 'react';
import './App.css';

import EventListenerComponent from "./EventListenerComponent";

function App() {
  return (
    <div className="App">
      <EventListenerComponent />
      <button onClick={() => { throw new Error("BAM! Stuff's broken!"); }}>Trigger error</button>
    </div>
  );
}

export default App;
