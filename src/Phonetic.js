import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <Audio audio={props.phonetic.audio} />
    </div>
  );
}