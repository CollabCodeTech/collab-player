import React, { useRef } from "react";

function PlayerVideo() {
  const video = useRef(null);

  const playAndPause = () =>
    video.current.paused ? video.current.play() : video.current.pause();

  return (
    <video
      ref={video}
      onClick={playAndPause}
      src="http://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    ></video>
  );
}

export default PlayerVideo;
