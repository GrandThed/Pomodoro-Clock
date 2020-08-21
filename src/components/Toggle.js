import React from "react";
import { GeneralContext } from "../context/GeneralContext";
import "./Toggle.css";

export const StartStop = () => {
  return (
    <GeneralContext.Consumer>
      {(value) => {
        let pauseState = value.state.pause;
        const pause = value.pause;
        return (
          <button className="button" onClick={pause}>
            {pauseState ? "Start" : "Pause"}
          </button>
        );
      }}
    </GeneralContext.Consumer>
  );
};
