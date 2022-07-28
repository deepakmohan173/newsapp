import React from "react";

export const InputField = (props) => {
    return (
      <div className="mb-6 ">
        <label
          htmlFor={props.label}
          className={
            " mb-2 text-sm font-medium text-gray-900 " + props.className
          }
        >
          {props.name}
        </label>
        <input
          ref={props.inputRef}
          autoComplete="off"
          type={props.type}
          id={props.label}
          className={
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
            props.className
          }
          required
        />
      </div>
    );
  };