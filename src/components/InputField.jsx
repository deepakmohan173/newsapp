import React from "react";

export const InputField = (props) => {
  const handleInput = (val, type) => {
    props.setsignupForm({
      ...props.signupForm,
      [type]: val,
    });
  };

  return (
    <div className="mb-6 ">
      <label
        htmlFor={props.label}
        className={" mb-2 text-sm font-medium text-gray-900 " + props.className}
      >
        {props.name}
      </label>
      <input
        autoComplete="off"
        type={props.type}
        id={props.label}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
          props.className
        }
        required={props.required}
        value={props.signupForm[props.label]}
        onChange={(event) => handleInput(event.target.value, props.label)}
      />
    </div>
  );
};
