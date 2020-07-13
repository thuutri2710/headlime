import React from "react";
import PropTypes from "prop-types";

Card.propTypes = {
  type: PropTypes.string,
  src: PropTypes.any,
  header: PropTypes.string,
  content: PropTypes.string,
};

function Card(props) {
  return (
    <div
      className={`w-full flex ${
        props.type == "col"
          ? "flex-col md:w-1/3 mb-8 md:mb-0"
          : "flex-col md:flex-row w-full md:w-1/2 mb-8 md:px-4"
      }`}
    >
      <img
        src={props.src}
        className={`p-0 ${props.type == "col" ? "" : "inline"}`}
      ></img>
      <div
        className={`flex flex-col ${
          props.type == "col" ? "text-center px-4 mt-3" : "text-left md:px-4"
        }`}
      >
        <h2
          className={`text-xl ${
            props.type == "col"
              ? "text-gray-400 pb-3 font-bold"
              : "leading-none pb-2 text-white font-bold"
          }`}
        >
          {props.header}
        </h2>
        <p className="text-gray-400 text-sm font-normal">{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
