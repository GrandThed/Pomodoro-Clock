(this.webpackJsonppomodoroclock=this.webpackJsonppomodoroclock||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(5),i=n.n(o),r=(n(15),n(6)),l=n(7),c=n(2),u=n(9),m=n(8),f=Object(a.createContext)(),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={displayConsole:!1,sound:!0,soundEffect:{finishWorking:"STOPPED",finishRest:"STOPPED"},notification:!1,working:!0,pause:!0,offset:0,seconds:1500,workingTime:1500,restingTime:300},a.pauseToggle=a.pauseToggle.bind(Object(c.a)(a)),a.soundToggle=a.soundToggle.bind(Object(c.a)(a)),a.notificationToggle=a.notificationToggle.bind(Object(c.a)(a)),a.personalizetheTimer=a.personalizetheTimer.bind(Object(c.a)(a)),a.reset=a.reset.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t,n;t=e.state.seconds,n=e.state.working,document.title="".concat(Math.floor(t/60)<=9?"0"+Math.floor(t/60):Math.floor(t/60),":").concat(t%60<=9?"0"+t%60:t%60," ").concat(n?"of working":"for a break!"),e.state.pause||(e.state.seconds>0?e.setState({seconds:e.state.seconds-1}):(e.setState({seconds:e.state.working?e.state.restingTime-1:e.state.workingTime,working:!e.state.working}),e.state.working?e.setState({soundEffect:{finishWorking:"STOPPED",finishRest:"PLAYING"}}):e.setState({soundEffect:{finishWorking:"PLAYING",finishRest:"STOPPED"}}),setTimeout((function(){e.setState({soundEffect:{finishWorking:"STOPPED",finishRest:"STOPPED"}})}),2500)),e.state.working?e.setState({offset:e.state.offset<2516?e.state.offset+1258/e.state.workingTime:0}):e.setState({offset:e.state.offset<2516?e.state.offset+1258/e.state.restingTime:0}))}),1e3)}},{key:"notificationToggle",value:function(){this.setState({notification:!this.state.notification})}},{key:"soundToggle",value:function(){this.setState({sound:!this.state.sound})}},{key:"pauseToggle",value:function(){this.setState({pause:!this.state.pause})}},{key:"personalizetheTimer",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?this.setState({seconds:this.state.workingTime>60?e?this.state.workingTime-60:this.state.workingTime+60:60,workingTime:this.state.workingTime>60?e?this.state.workingTime-60:this.state.workingTime+60:60}):this.setState({restingTime:this.state.restingTime>60?e?this.state.restingTime-60:this.state.restingTime+60:60})}},{key:"reset",value:function(){this.setState({working:!0,pause:!0,soundEffect:{finishWorking:"STOPPED",finishRest:"STOPPED"},offset:0,seconds:1500,workingTime:1500,restingTime:300})}},{key:"render",value:function(){return s.a.createElement(f.Provider,{value:{state:this.state,pause:this.pauseToggle,soundToggle:this.soundToggle,notificationToggle:this.notificationToggle,editTimer:this.personalizetheTimer,reset:this.reset}},this.props.children)}}]),n}(a.Component),d=(n(16),function(e){var t=e.stokeColor,n=e.stokeOnMove,a=e.svgId;return s.a.createElement(f.Consumer,null,(function(e){var o=e.state.offset;return s.a.createElement("svg",{id:a},s.a.createElement("circle",{id:"innercircle",style:n?{strokeDashoffset:o}:{},cx:"300",cy:"210",r:"200",stroke:t,strokeWidth:"5",fill:"transparent"}))}))}),h=(n(17),function(){return s.a.createElement(f.Consumer,null,(function(e){var t=e.state.pause,n=e.pause;return s.a.createElement("button",{className:"button",onClick:n},t?"Start":"Pause")}))}),k=(n(18),function(){return s.a.createElement(f.Consumer,null,(function(e){var t=e.state.seconds,n=e.state.working;return s.a.createElement("div",{className:"content"},s.a.createElement("p",{className:"timer-label"},"Session"),s.a.createElement("p",{id:"time-left",style:n?{color:"DodgerBlue"}:{color:"DarkOrange"}},"".concat(Math.floor(t/60)<=9?"0"+Math.floor(t/60):Math.floor(t/60),":").concat(t%60<=9?"0"+t%60:t%60)))}))}),E=n(3),T=n.n(E),p=(n(24),n(1)),v=function(){return s.a.createElement(f.Consumer,null,(function(e){var t=e.notificationToggle,n=e.state.notification,a=e.soundToggle,o=e.state.sound,i=e.state.soundEffect,r=e.state.restingTime,l=e.state.workingTime,c=e.editTimer,u=e.reset;return s.a.createElement("div",{className:"console-div"},s.a.createElement(T.a,{id:"beep",url:"https://freesound.org/data/previews/531/531512_7614679-lq.mp3",playStatus:T.a.status[i.finishWorking]}),s.a.createElement(T.a,{url:"https://freesound.org/data/previews/339/339343_4067257-lq.mp3",playStatus:T.a.status[i.finishRest]}),s.a.createElement("div",{className:"adjust-btns resting break-label"},s.a.createElement("button",{className:"break-decrement",onClick:function(){return c(!0,!1)}},s.a.createElement(p.a,null)),s.a.createElement("p",{className:"break-length"},r/60),s.a.createElement("button",{className:"break-increment",onClick:function(){return c(!1,!1)}},s.a.createElement(p.b,null))),s.a.createElement("button",{onClick:u,className:"option-btns"},s.a.createElement(p.f,null)),s.a.createElement("button",{onClick:t,className:"option-btns"},n?s.a.createElement(p.c,null):s.a.createElement(p.e,null)),s.a.createElement("button",{onClick:a,className:"option-btns"},o?s.a.createElement(p.d,null):s.a.createElement(p.g,null)),s.a.createElement("div",{className:"adjust-btns session session-label"},s.a.createElement("button",{className:"session-decrement",onClick:function(){return c(!0,!0)}},s.a.createElement(p.a,null)),s.a.createElement("p",{className:"session-length"},l/60),s.a.createElement("button",{className:"session-increment",onClick:function(){return c(!1,!0)}},s.a.createElement(p.b,null))))}))},b=function(){return s.a.createElement(g,null,s.a.createElement(f.Consumer,null,(function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"App"},s.a.createElement(v,null),s.a.createElement("div",null,s.a.createElement("div",{className:"content"},s.a.createElement(k,null),s.a.createElement(h,null),s.a.createElement("div",{className:"circles"},s.a.createElement(d,{svgId:"circle",stokeOnMove:!0,stokeColor:"DarkOrange"}),s.a.createElement(d,{svgId:"circle1",stokeOnMove:!1,stokeColor:"DodgerBlue"}))))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.62c4fcf7.chunk.js.map