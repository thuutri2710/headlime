import React from "react";
import PropTypes from "prop-types";

Quote.propTypes = {
  src: PropTypes.any,
  quote: PropTypes.string,
  author: PropTypes.string,
};

function Quote(props) {
  return (
    <section className="container flex justify-center items-center mb-32 p-4">
      <div className="max-w-4xl flex justify-center items-center flex-col text-center text-white">
        <img
          src={props.src}
          className="rounded-full mb-4"
          style={{ width: "85px", height: "85px" }}
        />
        <blockquote className="w-full bg-yellow-600 italic p-4 md:px-12 md:py-3 rounded-md mb-4 text-base md:text-xl">
          {props.quote}
        </blockquote>
        <span className="font-bold">{props.author}</span>
      </div>
    </section>
  );
}

export default Quote;
