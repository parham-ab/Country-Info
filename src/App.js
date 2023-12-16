import { Navigate, Route, Routes } from "react-router-dom";
// components
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
