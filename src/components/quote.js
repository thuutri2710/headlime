import React from "react";
import PropTypes from 'prop-types';

Quote.propTypes = {
    src: PropTypes.any,
    quote: PropTypes.string,
    author: PropTypes.string,
}

function Quote(props) {
  return (
    <section className="w-full flex justify-center items-center mb-32 p-4">
      <div className="w-8/12 flex justify-center items-center flex-col text-center text-white">
        <img src={props.src} className="rounded-full mb-4" style={{width: "85px", height:"85px"}}/>
        <q className="w-full bg-yellow-600 italic px-12 py-3 rounded-md mb-4 text-xl">
          {props.quote}
        </q>
        <span className="font-bold">{props.author}</span>
      </div>
    </section>
  );
}

export default Quote;
