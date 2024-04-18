import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import { UserAuthProvider } from "./contexts/user-auth";

function App() {
  return (
    <UserAuthProvider>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="link/:id" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </UserAuthProvider>
  );
}

export default App;
