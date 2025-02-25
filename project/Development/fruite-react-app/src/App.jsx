import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "../src/Website/Layout/Home";
import Shop from "./Website/Layout/Shop";
import PageNotFound from "./Website/Layout/PageNotFound";
import ShopDetail from "./Website/Layout/ShopDetail";
import Cart from "./Website/Layout/Cart";
import Checkout from "./Website/Layout/Checkout";
import Testimonial from "./Website/Layout/Testimonial";

import { ToastContainer } from "react-toastify";
import Admindashboard from "./Admin/Admindashboard";

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminAddTocart from "./Admin/AdminAddTocart";
import AdminFruiteVegMng from "./Admin/AdminFruiteVegMng";
import AdminBillingMng from "./Admin/AdminBillingMng";
import AdminLoginPage from "./Admin/AdminLoginPage";
import UserLoginpage from "./Website/Layout/UserLoginpage";
import UserRagestration from "./Website/Layout/UserRagestration";
import UpdateProfile from "./Website/Layout/UpdateProfile";
import AdminUserMng from "./Admin/AdminUserMng";
import ContactPage from "./Website/Layout/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shopdetail" element={<ShopDetail />}>
            <Route path=":shopdetailId" element={<ShopDetail />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkoutrt" element={<Checkout />} />
          <Route path="/Testimonial" element={<Testimonial />} />

          <Route path="/userlogin" element={<UserLoginpage />} />

          <Route path="/userRegistartion" element={<UserRagestration />} />

          <Route path="/updateProfile" element={<UpdateProfile />} />

          <Route path="/ContactusForm" element={<ContactPage />} />

          {/* PageNot Found 404 */}

          <Route path="*" element={<PageNotFound />}></Route>

          {/* Admin side Dashborad */}

          <Route path="/AdminDashboard" element={<Admindashboard />} />

          <Route path="/AddTocartAdmin" element={<AdminAddTocart />} />

          <Route path="/AdminFruiteVegMng" element={<AdminFruiteVegMng />} />

          <Route path="/AdminBillingMNG" element={<AdminBillingMng />} />

          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />

          <Route path="/AdminUserMNG" element={<AdminUserMng />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
