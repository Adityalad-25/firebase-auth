import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Account from "./components/Account";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <div>

      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
