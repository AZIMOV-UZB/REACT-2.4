import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
