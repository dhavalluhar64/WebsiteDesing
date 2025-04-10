import "./App.css";
import CarBooking from "./WebsitePage/Layout/CarBooking";
import AboutPage from "./WebsitePage/Layout/AboutPage";
import CarListing from "./WebsitePage/Layout/Car-listing";
import CarDetails from "./WebsitePage/Layout/CarDetails";
import Home from "./WebsitePage/Layout/Home";
// import Index from "./WebsitePage/Layout/Home";
import Service from "./WebsitePage/Layout/Service";
import The_Theme from "./WebsitePage/Layout/The-Theme";
import Testimonial from "./WebsitePage/Layout/Testimonial";
import Contact_Us from "./WebsitePage/Layout/Contact-Us";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashbord from "./Admin/AdminPage/AdminDashbord";
import AdCarlistingMng from "./Admin/AdminPage/AdCarlistingMng";
import AdServiceMng from "./Admin/AdminPage/AdServiceMng";
import AdCarlistingAdd from "./Admin/AdminPage/AdCarlistingAdd";
import AdServiceAdd from "./Admin/AdminPage/AdServiceAdd";
import ErrorPage from "./WebsitePage/Layout/ErrorPage";
import Ragistration from "./WebsitePage/Layout/Ragistration";
import LoginPage from "./WebsitePage/Layout/LoginPage";
import UserManage from "./Admin/AdminPage/UserManage";
import AdminLogin from "./Admin/AdminPage/AdminLogin";

import { ToastContainer, toast } from "react-toastify";
import UpdateProfile from "./WebsitePage/Layout/UpdateProfile";
import CarBookingMng from "./Admin/AdminPage/CarBookinMng";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/carlisting" element={<CarListing />} />
          <Route path="/cardetails" element={<CarDetails />} />
          <Route path="/carbooking" element={<CarBooking />} />
          <Route path="/Theteam" element={<The_Theme />} />
          <Route path="/Tstimonial" element={<Testimonial />} />
          <Route path="/contactUs" element={<Contact_Us />} />

          <Route path="/ragistration" element={<Ragistration />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/update" element={<UpdateProfile />} />



          <Route path="*" element={<ErrorPage />} />

          {/* <Admin_Header /> */}

          <Route path="/DashBorde" element={<AdminDashbord />} />

          <Route path="/AdCarlistingMNG" element={<AdCarlistingMng />} />

          <Route path="/AdCarlistingAdd" element={<AdCarlistingAdd />} />

          <Route path="/serviceMNG" element={<AdServiceMng />} />

          <Route path="/AdserviceAdd" element={<AdServiceAdd />} />

          <Route path="/carbookingMng" element={<CarBookingMng />} />

          <Route path="/usermanage" element={<UserManage />} />

          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
