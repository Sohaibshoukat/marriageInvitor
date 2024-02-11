import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

function App() {

  return (
    <>
                <BrowserRouter>
            <Nav />
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              {/* <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/services" element={<Service />}></Route>
              <Route path="/testimonials" element={<Testimonial />}></Route>
              <Route path="/work" element={<Work />}></Route> */}
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
