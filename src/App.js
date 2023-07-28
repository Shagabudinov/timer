import "./App.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";

function App() {
  const [time, setTime] = useState(0);

  const timerSubmitHandler = (event) => {
    event.preventDefault();
    setTime(event.target[0].value.replace(/\D/g, ""));
    event.target[0].value = '';
  };

  useEffect(() => {
    let timer;
    if (time) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="App">
      <form onSubmit={timerSubmitHandler}>
        <input placeholder="Seconds"></input>
        <button>Start</button>
        <Timer seconds={time}/>
      </form>
    </div>
  );
}

export default App;
