import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Button>Hello World</Button>
    </>
  );
}

export default App;
