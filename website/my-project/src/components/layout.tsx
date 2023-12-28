import React from "react";
import NavBar from "./nav-bar";
import Footer from "./footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
        <div className="mb-auto">{children}</div>
      <Footer/>
    </div>
    </>
  )
}

export default Layout;