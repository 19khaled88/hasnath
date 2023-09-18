import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import Footer from "../pages/Footer";
import "../css/layout.css";
const Layout = () => {
  const [footerstatus, setStatus] = useState("");
  const footerNav = (data) => {
    setStatus(data);
  };
  return (
    <div>
      {/* <Nav /> */}
      <Navbar footerstatus={footerstatus} />

      <main className="main_container">
        <Outlet />
      </main>
      <Footer footerNav={footerNav} />
    </div>
  );
};

export default Layout;
