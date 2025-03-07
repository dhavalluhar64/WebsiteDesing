import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Webpage/Home";
import RegistrationPage from "./Webpage/RegistrationPage";
import LoginPage from "./Webpage/LoginPage";

import { ToastContainer, toast } from "react-toastify";
import EditUserData from "./Webpage/EditUserData";
import AdminDashbord from "./Admin/AdminDashbord";
import AdminMNG from "./Admin/AdminMNG";
import ViewModel from "./Admin/ViewModel";
import AdminCreate from "./Admin/AdminCreate";
import UpdateProduct from "./Admin/UpdateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route path="/Loginpage" element={<LoginPage />} />
            <Route path="/UserUpDate" element={<EditUserData />} />

            <Route path="/Admindashbord" element={<AdminDashbord />} />
            <Route path="/AdminMNG" element={<AdminMNG />} />

            <Route path="/AdminMNG/:id" element={<ViewModel />} />

            <Route path="/Admincreate" element={<AdminCreate />} />

            <Route path="/UpdatePro/:updateId" element={<UpdateProduct />} />
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
