import React from "react";

const Event = () => {
  const handleClick = () => {
    alert("Button Clicked!!!");
  };
  return (
    <div>
      <h1>Handling Events</h1>
      <button
        className="btn"
        onClick={() => {
          alert("Button Clicked With Event");
        }}
      >
        {" "}
        Click me!{" "}
      </button>
    </div>
  );
};

export default Event;
