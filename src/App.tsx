import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
