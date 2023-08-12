import React from "react";

function Input(props) {
  const inputChangeHandler = (input, value) => {
    console.log(input, value);
  };
  return (
    <div className="mb-16">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={(e) => inputChangeHandler(props.id, e.target.value)}
        type={props.type}
        id={props.id}
      />
    </div>
  );
}

export default Input;
