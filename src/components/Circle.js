import React from "react";
import { GeneralContext } from "../context/GeneralContext";
import "./Circle.css"


export const Circle = (props) => {
  const stokeColor = props.stokeColor
  const stokeOnMove = props.stokeOnMove
  const svgId = props.svgId
  return (
    <GeneralContext.Consumer>
      {(value) => {
        let offset = value.state.offset
        return (
          <svg id={svgId}>
            <circle
              id="innercircle"
              style={stokeOnMove ? { strokeDashoffset: offset } : {}}
              cx="300"
              cy="210"
              r="200"
              stroke= {stokeColor}
              strokeWidth="5"
              fill="transparent"
            />
          </svg>
        );
      }}
    </GeneralContext.Consumer>
  );
};
