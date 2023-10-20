import React, { useState } from "react";
import './TextForm.css'

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handlerChange = (event) => {
    setText(event.target.value);
  };

  const changeUp = () => {
    setText(text.toUpperCase());
  };

  const changeLo = () => {
    setText(text.toLowerCase());
  };

  const changeCapt = () => {
    const words = text.split(" ");
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return "";
    });
    const capitalizedString = capitalizedWords.join(" ");
    setText(capitalizedString);
  };

  const copyToClipboard = () => {
    var text = document.getElementById('mybox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const resetAll = () => {
    setText("");
  };

  const removeSpace = () => {
    // Remove extra spaces and update the cleanedText state
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
  };

  if(props.mode === 'white'){
    var textAreaStyle = {
      backgroundColor: '#001922',
      color: 'white',
      height: '400px'
    }
    var word = {
      color: "white",
      textAlign: "right"
    };
    var heading = {
      color: "white"
    };
    document.getElementsByTagName('body')[0].style.backgroundColor = "#022b3a";
  }
  else{
    textAreaStyle = {
      backgroundColor: 'white',
      color: 'black',
      height: '400px'
    }
    word = {
      color: "black",
      textAlign: "right"
    };
    heading = {
      color: "black"
    };
    document.getElementsByTagName('body')[0].style.backgroundColor = "#ffffff";
  }

  return (
    <>
      <h2 className="my-3" style={heading}>
        TEXT UTILS - A Better Way To Modify And Analyze Your Text
      </h2>
      <hr style={heading}/>
      <div
        style={{
          border: `1px solid ${props.mode === 'white'?"white":"gray"}`,
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <button className={`btn btn-${props.mode === 'white'?"light":"dark"} btn-sm my-1 me-2`} onClick={changeUp}>
          UpperCase
        </button>
        <button className={`btn btn-${props.mode === 'white'?"light":"dark"} btn-sm my-1 me-2`} onClick={changeLo}>
          LowerCase
        </button>
        <button
          className={`btn btn-${props.mode === 'white'?"light":"dark"} btn-sm my-1 me-2`}
          onClick={changeCapt}
        >
          Capitalize
        </button>
        <button
          className={`btn btn-${props.mode === 'white'?"light":"dark"} btn-sm my-1 me-2`}
          onClick={removeSpace}
        >
          RemoveSpace
        </button>
        <button
          className={`btn btn-${props.mode === 'white'?"light":"dark"} btn-sm my-1 me-2`}
          onClick={copyToClipboard}
        >
          Copy To Clipboard
        </button>
        <button className={`btn btn-${props.mode === 'white'?"light":"dark"} btn-sm my-1 me-2`} onClick={resetAll}>
          Reset All
        </button>
        <div className="form my-2">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            onChange={handlerChange}
            placeholder="Enter Your Text Here..."
            style={textAreaStyle}
          ></textarea>
        </div>
        <div style={word}>
          Words : <b>{text.split(" ").filter((ele)=>{return ele.length!==0}).length}</b> &nbsp;|&nbsp; Characters :{" "}
          <b>{text.length}</b>
        </div>
      </div>
      <div className="container" style={heading}>
        <br/>
        <h6>Text Utils - Copyright &copy; {new Date().getFullYear()} | All Rights Reserved</h6>
        <p style={{fontSize: '15px'}}>Created By <b>Rahul Taak</b></p>
      </div>
    </>
  );
}
