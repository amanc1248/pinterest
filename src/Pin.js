import React from "react";
import "./Pin.css";
function    Pin(props) {
  let sizePin = "medium";
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container ${sizePin}`}>
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Pin;
