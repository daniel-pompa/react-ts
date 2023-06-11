import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  milliseconds: number;
};

const Timer = ({ milliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<number>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds(s => s + 1), milliseconds);
  }, [milliseconds]);

  return (
    <>
      <p className='fs-4 mt-4'>
        Temporizador: <small>{seconds}</small>
      </p>
    </>
  );
};

export default Timer;
