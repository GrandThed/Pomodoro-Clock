import React from "react";
import { GeneralContext } from "../context/GeneralContext";
import "./Time.css"
export const Time = () => {
  return (
    <GeneralContext.Consumer>
      {(value) => {
        let seconds = value.state.seconds;
        let working = value.state.working;
        return (
          <div className="content">
            <p className="timer-label">Session</p>
            <p
              id="time-left"
              style={
                !working ? { color: "DarkOrange" } : { color: "DodgerBlue" }
              }
            >
              {`${
                Math.floor(seconds / 60) <= 9
                  ? "0" + Math.floor(seconds / 60)
                  : Math.floor(seconds / 60)
              }:${seconds % 60 <= 9 ? "0" + (seconds % 60) : seconds % 60}`}
            </p>
          </div>
        );
      }}
    </GeneralContext.Consumer>
  );
};
