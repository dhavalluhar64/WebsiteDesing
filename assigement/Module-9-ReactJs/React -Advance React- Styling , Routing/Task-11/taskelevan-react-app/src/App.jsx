import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./Task-1/HomePage";
// import AboutPage from "./Task-1/AboutPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import HomePagetwo from "./Task-2/HomePagetwo";
import AboutPagetwo from "./Task-2/AboutPagetwo";
import ContactPage from "./Task-2/ContactPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} /> */}

            <Route path="/" element={<HomePagetwo />} />
            <Route path="/AboutPagetwo" element={<AboutPagetwo />} />

            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
