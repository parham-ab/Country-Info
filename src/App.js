import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// components
import Details from "./components/Details";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
