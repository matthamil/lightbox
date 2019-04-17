import React, { Component, useState } from "react";
import "./App.css";
import { Headlamp } from "./Headlamp/Headlamp";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Headlamp
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        contentLabel="Headlamp"
      />
    </div>
  );
};

export default App;
