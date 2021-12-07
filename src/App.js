import React, { useEffect, useState } from 'react'
import './App.css';
import Display from './Components/Display';
import Button from './Components/Button';
import CounterDisplay from './Components/CounterDisplay';
import SaveMessage from './Components/SaveMessage';

function App() {
  const [num, setNum] = useState(null);
  const [init, setInit] = useState(num);
  const [show, setShow] = useState(false);

  const putBody = {
    method: "PUT",
    body: JSON.stringify({
      harshit: init
    })
  }

  const incFunc = async () => {
    if (init < process.env.REACT_APP_MAX_VALUE.slice(0, -1)) {
      setInit(prev => prev + 1);
    }
    setShow(true);
    await fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", putBody).then(res => {
      console.log(res)
    });
    setShow(false);
  }
  const decFunc = async () => {
    setInit((prev) => prev - 1);
    setShow(true);
    await fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", putBody).then(res => {
      console.log(res)
    });
    setShow(false);
  }

  useEffect(async () => {
    const number = await fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/harshit.json");
    const data = await number.json();
    setNum(data);
    setInit(data == null ? 1 : data);
  }, [])
  return (
    <>
      <div className="App">
        <div className="container">
          {show && <SaveMessage />}
          <div className="content">
            <Button operator="decrement" func={decFunc} />
            <Display initnum={init} setInitNum={setInit} setShow={setShow} />
            <Button func={incFunc} />
          </div>
          <CounterDisplay initnum={init} />
        </div>
      </div>
    </>
  );
}

export default App;
