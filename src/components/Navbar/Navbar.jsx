import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="d-flex px-3 align-items-center justify-content-start m-0 navbar">
        <div className="profile bg-success d-flex justify-content-center align-items-center ">
          <h4 className="text-white m-0">SG</h4>
        </div>
        <div className="name ms-3 text-white">
          <h5>Social Group</h5>
        </div>
      </div>
    </>
  );
};

export default Navbar;
