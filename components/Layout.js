import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Wame from "./Wame";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpeg" />
      </Head>
      <Navbar />
      {children}
      <Footer />
      <Wame />
    </>
  );
};

export default Layout;
