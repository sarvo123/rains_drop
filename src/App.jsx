import React, { useState } from "react";
import RainPattern from "./components/RainPattern";
import Grid from "./components/Grid";

function App() {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(20);

  return (
    <div className="App">
      <RainPattern rows={rows} cols={cols} />
    </div>
  );
}

export default App;
