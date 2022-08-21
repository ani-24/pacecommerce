import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Wame from "./Wame";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Wame />
    </>
  );
};

export default Layout;
