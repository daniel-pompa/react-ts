/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const value: number = 1;

  // Function to increment the counter by one
  const handleAdd = () => setCounter(counter + value);

  // Function to decrement the counter by one
  const handleSubtract = () => setCounter(counter - value);

  // Function to reset the counter to zero
  const handleReset = () => setCounter(0);

  return (
    <div className='my-5'>
      <h2>Contador - useState</h2>
      <p className='fs-4'>Valor: {counter}</p>
      <div className='mt-4'>
        <button onClick={handleAdd} className='btn btn-outline-primary me-2'>
          +
        </button>
        <button onClick={handleReset} className='btn btn-outline-primary me-2'>
          Restablecer
        </button>
        <button onClick={handleSubtract} className='btn btn-outline-primary'>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
