import React, { useState } from "react";
import TextForm from "./TextForm";

export default function Navbar() {
  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleColor = () => {
    if (myStyle.backgroundColor === "white") {
      document.title = "Text Utils - Dark Mode";
      setStyle({
        color: "white",
        backgroundColor: "#001922",
      });
    } else {
      document.title = "Text Utils - Light Mode";
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

    if (myStyle.backgroundColor === "white") {
      var myMode = {
        color: "black",
        cursor: "pointer"
      };
      var navCol = {
        color: "black",
        backgroundColor: "#dbdbdb",
        fontSize: '17px'
      }
    } else {
      myMode = {
        color: "white",
        cursor: "pointer"
      };
      navCol = {
        Color: "white !important",
        backgroundColor: "#001922",
        fontSize: '17px'
      }
    }

  return (
    <>
      <nav className={`navbar navbar-expand-lg p-3`} style={navCol}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={navCol}>
            <b>Text Utils App</b>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              
              <p style={{height: '100%', margin: 'auto 0px', color: 'gray'}}>Created By Rahul</p>
            </ul>
          </div> 
          <div className="form-check form-switch">
            <input
              className="form-check-input mt-1 me-2"
              type="checkbox"
              style={{
                cursor: "pointer",
                border: "2px solid grey",
                width: "40px",
                height: "20px",
              }}
              onClick={toggleColor}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label align-middle me-1"
              htmlFor="flexSwitchCheckDefault"
              style={myMode}
            >
              Dark Mode
            </label>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center'}}>
              <div style={{width: '30px', height: '2px', border: `1px solid gray`, borderRadius: '5px'}}></div>
              <div style={{width: '30px', height: '2px', border: `1px solid gray`, borderRadius: '5px'}}></div>
              <div style={{width: '30px', height: '2px', border: `1px solid gray`, borderRadius: '5px'}}></div>
            </span>
          </button> 
        </div>
      </nav>
      <div className="container"><TextForm mode={myStyle.color}/></div>
    </>
  );
}
