import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results row">
        <span className="Left col-5">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key="index">
                <Phonetic phonetic={phonetic} />
              </div>
            );
          
          })}
        </span>
        <span className="Right col-5">
        {props.results.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          )
        })}
        </span>
      </div>
    )
  } else {
    return null;
  }
}