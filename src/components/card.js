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
        props.type == "col" ? "flex-col" : "flex-row items-start"
      }`}
    >
      <img src={props.src} className="p-0"></img>
      <div
        className={`flex flex-col px-2 ${
          props.type == "col" ? "text-center  mt-3" : "text-left"
        }`}
      >
        <h2 className={`text-xl ${props.type == "col" ? "text-gray-400 pb-3 font-bold" : "leading-none pb-2 text-white font-bold"}`}>{props.header}</h2>
        <p className="text-gray-400 text-sm font-normal">{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
