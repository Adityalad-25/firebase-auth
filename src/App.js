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
      {/* <h1 className="text-center text-3xl font-bold mx-5">
        Login Authentication Using React and{" "}
      Firebase</h1> */}

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
