import React from "react";
import { Circle } from "./components/Circle";
import GeneralContextProvider, {
  GeneralContext,
} from "./context/GeneralContext";
import { StartStop } from "./components/Toggle";
import { Time } from "./components/Time";
import { Console } from "./components/Console";

const App = () => {
  // 2516‬
  // 1258
  return (
    <GeneralContextProvider>
      <GeneralContext.Consumer>
        {(value) => {
          return (
            <div>
            <div className="App">
                <Console></Console>
              <div>
                <div className="content">
                  <Time></Time>
                  <StartStop></StartStop>
                  <div className="circles">
                    <Circle
                      svgId="circle"
                      stokeOnMove={true}
                      stokeColor="DarkOrange"
                    ></Circle>
                    <Circle
                      svgId="circle1"
                      stokeOnMove={false}
                      stokeColor="DodgerBlue"
                    ></Circle>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        }}
      </GeneralContext.Consumer>
    </GeneralContextProvider>
  );
};

export default App;
