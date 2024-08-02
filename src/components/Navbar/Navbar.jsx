import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <div className="d-flex px-3 align-items-center justify-content-start m-0 navbar">
        <div className="profile d-flex justify-content-center align-items-center " style={{background: props.color}}>
          <h4 className="text-white m-0">
          {(() => {
            if(props?.name){
                      const words = props?.name?.split(" ");
                      const initials = words.slice(0, 2).map((word) => word.charAt(0).toUpperCase()).join("");
                      return initials;}
                    })()}
          </h4>
        </div>
        <div className="name ms-3 text-white">
          <h5>{props?.name}</h5>
        </div>
      </div>
    </>
  );
};

export default Navbar;
