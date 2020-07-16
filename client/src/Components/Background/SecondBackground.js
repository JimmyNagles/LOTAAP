import React from "react";

function SecondBackground(props) {
  return (
    <div
      className="white-text"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          top: "0",
          color: "",
          backgroundColor: "rgba(0,0,0,0)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default SecondBackground;
