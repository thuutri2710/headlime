import React from "react";
import PropTypes from "prop-types";

Guide.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  list: PropTypes.array,
};

function Guide(props) {
  return (
    <div className="w-full text-left">
      <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4 md:mb-6">
        {props.title}
      </h1>
      <p className="text-gray-500  text-base font-normal md:text-lg md:font-medium">
        {props.content}
      </p>
      <ul className="usps text-base font-normal mb-8 mt-4 text-white">
        {props.list.map((item, idx) => (
          <li className="li-item mb-4 pl-6" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Guide;
