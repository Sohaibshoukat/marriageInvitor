import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login"
import Dashboard from "./Components/Dashboard";
import Logo from "./assets/Logo.png"

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <Dashboard userImage={Logo}/> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
