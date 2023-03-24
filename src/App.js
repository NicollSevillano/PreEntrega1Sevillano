import React from "react";
import {BrowserRouter} from "react-router-dom"
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
        <BrowserRouter >
            <NavBar/>
          </BrowserRouter>
    </div>
  );
}

export default App;
