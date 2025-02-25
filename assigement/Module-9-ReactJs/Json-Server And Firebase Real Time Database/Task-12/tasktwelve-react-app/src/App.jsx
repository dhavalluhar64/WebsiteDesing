import "./App.css";
// import CrudJson from "./Task-1/CrudJson";
// import FetchingData from "./Task-1/FetchingData";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Task-2/Authentication/Auth";
import Home from "./Task-2/Authentication/Home";
import UserManage from "./Task-2/CrudOpration/UserManage";
import ErrorLoading from "./Task-3/ErrorLoading";

function App() {
  return (
    <>
      {/* <FetchingData /> */}
      {/* <CrudJson /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          {/* <Route path="/CrudOpation" element={<UserManage />} /> */}

          <Route path="/errorhandle" element={<ErrorLoading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
