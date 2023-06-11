import { useState } from 'react';
import Timer from './Timer';

const ParentTimer = () => {
  const [milliseconds, setMilliseconds] = useState(1000);

  return (
    <div className='my-5'>
      <h2>Timer - useEffect - useRef</h2>
      <p className='mt-4'>Milisegundos: {milliseconds}</p>
      <button
        onClick={() => setMilliseconds(1000)}
        className='btn btn-outline-primary mt-4 me-2'
      >
        1000
      </button>
      <button
        onClick={() => setMilliseconds(2000)}
        className='btn btn-outline-primary mt-4'
      >
        2000
      </button>
      <Timer milliseconds={milliseconds} />
    </div>
  );
};

export default ParentTimer;
