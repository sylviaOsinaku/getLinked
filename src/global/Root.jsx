import React from "react";
import { Outlet } from "react-router-dom";
import MyNav from "../components/MainNavigation/Nav";
function Root() {
  return (
    <>
      <MyNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
