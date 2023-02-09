import { useState } from 'react';
import '../styles/counter.css';
import Button from './Button';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const increase = () => {
    setCount(count + value);
  }

  const decrease = () => {
    setCount(count - value);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div id="counter">
      <h1>Counter: {count}</h1>
      <input type="number" onChange={handleChange} value={value}/>
      <div id="button-container">
        <Button label="Decrease" action={decrease}/>
        <Button label="Increase" action={increase}/>
        <Button label="Reset" action={reset}/>
      </div>
    </div>
  );
}