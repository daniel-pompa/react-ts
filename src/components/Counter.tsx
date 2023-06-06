import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='mt-4'>
      <h2>Contador - useState</h2>
      <p className='fs-4'>Valor: {counter}</p>
      <div className='mt-4'>
        <button className='btn btn-outline-primary me-2'>+</button>
        <button className='btn btn-outline-primary me-2'>Restablecer</button>
        <button className='btn btn-outline-primary'>-</button>
      </div>
    </div>
  );
};

export default Counter;
