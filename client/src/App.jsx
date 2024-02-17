import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login"


function App() {

  return (
    <>
                <BrowserRouter>
            {/* <Nav /> */}
            {/* <Header /> */}
            <Routes>
              {/* <Route path="/" element={<Home />}></Route> */}
              {/* <Route path="/" element={<SignUp />}></Route> */}
              {/* <Route path="/" element={<Login />}></Route> */}
              {/* <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
