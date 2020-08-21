import React from "react";
import Sound from "react-sound";
import "./Console.css";
import {
  AiOutlineReload,
  AiFillNotification,
  AiOutlineNotification,
  AiFillSound,
  AiOutlineSound,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { GeneralContext } from "../context/GeneralContext";
export const Console = () => {
  return (
    <GeneralContext.Consumer>
      {(value) => {
        let notificationToggle = value.notificationToggle;
        let notification = value.state.notification;
        let soundToggle = value.soundToggle;
        let sound = value.state.sound;
        let soundEffect = value.state.soundEffect;
        let restingTime = value.state.restingTime;
        let workingTime = value.state.workingTime;
        let editTimer = value.editTimer;
        let reset = value.reset;
        return (
          <div className="console-div">
            <Sound id="beep" url="https://freesound.org/data/previews/531/531512_7614679-lq.mp3" 
            playStatus={Sound.status[soundEffect.finishWorking]}
            />
            <Sound url="https://freesound.org/data/previews/339/339343_4067257-lq.mp3" 
            playStatus={Sound.status[soundEffect.finishRest]}
            />
            <div className="adjust-btns resting break-label">
              <button
                className="break-decrement"
                onClick={() => editTimer(true, false)}
              >
                <AiFillCaretDown />
              </button>
              <p className="break-length">{restingTime / 60}</p>
              <button
                className="break-increment"
                onClick={() => editTimer(false, false)}
              >
                <AiFillCaretUp />
              </button>
            </div>
            <button onClick={reset} className="option-btns">
              <AiOutlineReload />
            </button>
            <button onClick={notificationToggle} className="option-btns">
              {notification ? (
                <AiFillNotification />
              ) : (
                <AiOutlineNotification />
              )}
            </button>
            <button onClick={soundToggle} className="option-btns">
              {sound ? <AiFillSound /> : <AiOutlineSound />}
            </button>
            <div className="adjust-btns session session-label">
              <button
                className="session-decrement"
                onClick={() => editTimer(true, true)}
              >
                <AiFillCaretDown />
              </button>
              <p className="session-length">{workingTime / 60}</p>
              <button
                className="session-increment"
                onClick={() => editTimer(false, true)}
              >
                <AiFillCaretUp />
              </button>
            </div>
          </div>
        );
      }}
    </GeneralContext.Consumer>
  );
};
