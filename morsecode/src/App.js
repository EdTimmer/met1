import React from 'react';
import './App.css';

function App() {

  // const [pressed, setPressed] = React.useState(false);
  // const [startTime, setStartTime] = React.useState(0);
  // const [endTime, setEndTime] = React.useState(0);
  // const [elapsedTime, setElapsedTime] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [dot, setDot] = React.useState();




  React.useEffect(() => {
      let pressed = false;
      let startTime = 0;
      let endTime = 0;
      let elapsedTime = 0;
      const pressKey = event => {
        if (event.keyCode === 32 && !pressed) {
          pressed = true;
          startTime = Date.now();
          console.log("startTime", startTime);
        }
      };

      const liftKey = event => {
        if (event.keyCode === 32) {
          endTime = Date.now();

          console.log("endTime", endTime);
          if (endTime !== 0) {
            elapsedTime = endTime - startTime;
            pressed = false;
            console.log("elapsedTime", elapsedTime);
            elapsedTime < 150 ? setDot(true) : setDot(false);
          }
        }

        const newCount = count + 1;
        setCount(newCount);
      };
    // initiate the event handler
    // if (!pressed) {
      window.addEventListener("keydown", pressKey, false);
    // }
    
    // if (pressed) {
      window.addEventListener("keyup", liftKey, false);
    // }
   

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      // console.log('fired');
      window.removeEventListener("keydown", pressKey);
      window.removeEventListener("keyup", liftKey);
    };
  }, [count]);
  

  return (
    <div className="App">
      {dot ? <div>.</div> : <div>--</div>}
    </div>
  );
}

export default App;
