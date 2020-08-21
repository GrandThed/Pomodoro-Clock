import React, { createContext, Component } from "react";
import { changingTitle } from "./ChangingTitle";
import { notifications } from "./notifications";

export const GeneralContext = createContext();

export default class GeneralContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayConsole: false,
      sound: true,
      soundEffect: {
        finishWorking: "STOPPED",
        finishRest: "STOPPED",
      },
      notification: false,
      working: true,
      pause: true,
      offset: 0,
      seconds: 1500,
      workingTime: 1500,
      restingTime: 300,
    };
    this.pauseToggle = this.pauseToggle.bind(this);
    this.soundToggle = this.soundToggle.bind(this);
    this.notificationToggle = this.notificationToggle.bind(this);
    this.personalizetheTimer = this.personalizetheTimer.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      changingTitle(this.state.seconds, this.state.working); // exported from /context/ChangingTitle.js
      if (!this.state.pause) {
        if (this.state.seconds > 0) {
          this.setState({
            seconds: this.state.seconds - 1,
          });
        } else {
          this.setState({
            seconds: !this.state.working
              ? this.state.workingTime
              : this.state.restingTime - 1,
            working: !this.state.working,
          });
          if(this.state.working){
            this.setState({
              soundEffect: {
                finishWorking: "STOPPED",
                finishRest: "PLAYING",
              },
            })

          }else{
            this.setState({
              soundEffect: {
                finishWorking: "PLAYING",
                finishRest: "STOPPED",
              },
            })
            
          }
          setTimeout(() => {
            this.setState({
              soundEffect: {
                finishWorking: "STOPPED",
                finishRest: "STOPPED",
              },
            })
          }, 2500);
        }
        if (this.state.working) {
          this.setState({
            offset:
              this.state.offset < 2516
                ? this.state.offset + 1258 / this.state.workingTime
                : 0,
          });
        } else {
          this.setState({
            offset:
              this.state.offset < 2516
                ? this.state.offset + 1258 / this.state.restingTime
                : 0,
          });
        }
      }
    }, 1000);
  }
  notificationToggle() {
    this.setState({
      notification: !this.state.notification,
    });
  }
  soundToggle() {
    this.setState({
      sound: !this.state.sound,
    });
  }
  pauseToggle() {
    this.setState({
      pause: !this.state.pause,
    });
  }
  personalizetheTimer(isDecrease, isWorkingTime = true) {
    if (isWorkingTime) {
      this.setState({
        seconds:
          this.state.workingTime > 60
            ? isDecrease
              ? this.state.workingTime - 60
              : this.state.workingTime + 60
            : 60,
        workingTime:
          this.state.workingTime > 60
            ? isDecrease
              ? this.state.workingTime - 60
              : this.state.workingTime + 60
            : 60,
      });
    } else {
      this.setState({
        restingTime:
          this.state.restingTime > 60
            ? isDecrease
              ? this.state.restingTime - 60
              : this.state.restingTime + 60
            : 60,
      });
    }
  }
  reset() {
    this.setState({
      working: true,
      pause: true,
      soundEffect: {
        finishWorking: "STOPPED",
        finishRest: "STOPPED",
      },
      offset: 0,
      seconds: 1500,
      workingTime: 1500,
      restingTime: 300,
    });
  }
  render() {
    return (
      <GeneralContext.Provider
        value={{
          state: this.state,
          pause: this.pauseToggle,
          soundToggle: this.soundToggle,
          notificationToggle: this.notificationToggle,
          editTimer: this.personalizetheTimer,
          reset: this.reset,
        }}
      >
        {this.props.children}
      </GeneralContext.Provider>
    );
  }
}