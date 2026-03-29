import { useState, useEffect, useRef } from 'react'
import './App.css'
import Counter from './Counter';

function App() {
  // const [isShown, setIsShown] = useState(true);
  const [seconds, setSeconds] = useState(0);
  // const [timerID, setTimerID] = useState({
  //   current: null
  // });
  const timerID = useRef(null);
  console.log(timerID);

  const setTimer = () => {
    timerID.current = setInterval(() => {
      setSeconds(currSeconds => currSeconds + 1);
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timerID.current);
  }

  return (
    // <>
    //   <button onClick={() => setIsShown(!isShown)}>
    //     {isShown ? 'Hide' : 'Show'} Message
    //   </button>
    //   {isShown && <p>This is a message that can be shown or hidden.</p>}
    //   {isShown ? <Counter /> : null}
    // </>
    <>
      <button onClick={setTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>seconds: {seconds}</p>
    </>
  )
}

export default App
