import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import RegistrationPage from "./Component/RegistrationPage";
import LoginPage from "./Component/LoginPage";
import Admindash from "./Admin/Admindash";
import AdminManag from "./Admin/AdminManag";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="/loginpage" element={<LoginPage />} />

          {/* Adminside dashbored */}

          <Route path="/admindash" element={<Admindash />} />

          <Route path="/adminmanage" element={<AdminManag />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
