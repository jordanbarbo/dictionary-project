import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Audio(props) {
  if (props.audio) {
    return (
      <div className="Audio">
        <ReactAudioPlayer src={props.audio} onPlay controls />
      </div>
    );
  } else {
    return null;
  }
}