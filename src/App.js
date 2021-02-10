import React, { useState } from "react";

//Import Styles
import "./styles/app.scss";

//Import Components
import Player from "./components/Player";
import Song from "./components/Song";

//Import Data
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
