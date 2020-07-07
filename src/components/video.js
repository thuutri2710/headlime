import React from "react";
import PropTypes from 'prop-types';

Video.propTypes = {
    src: PropTypes.string
}


function Video(props) {
  return (
    <video
      autoPlay="autoplay"
      muted="muted"
      loop="loop"
      className="rounded border border-gray-800"
    >
      <source
        src={props.src}
        type="video/mp4"
      />
    </video>
  );
}

export default Video;
