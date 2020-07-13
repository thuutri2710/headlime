import React from "react";
import { any } from "prop-types";

Form.propTypes = {
  onClick: any,
  onChange: any,
};

function Form(props) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <form className="flex flex-col justify-center items-center rounded-md w-full bg-blue-800 bg-opacity-25 px-6 pb-6 pt-8 text-black-300">
        <div className="flex flex-col mb-4 w-10/12">
          <label
            className="mb-2 uppercase font-semibold text-base text-grey-darkest"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest outline-none rounded-md"
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col mb-4 w-10/12">
          <label
            className="mb-2 uppercase font-semibold text-base text-grey-darkest"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest outline-none rounded-md"
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col mb-4 w-10/12">
          <label
            className="mb-2 uppercase font-semibold text-base text-grey-darkest"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest outline-none rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col mb-6 w-10/12">
          <label
            className="mb-2 uppercase font-semibold text-base text-grey-darkest"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border py-2 px-3 text-grey-darkest outline-none rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => props.onChange(e)}
          />
          <span className="text-red-600 mt-2" id="error">
            Minimum 8 characters
          </span>
        </div>
        <button className="w-4/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Button
        </button>
      </form>
    </div>
  );
}

export default Form;
