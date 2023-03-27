import { useEffect, useState } from 'react';

const Timer = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 30_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-testid='timer'>
      {dateState.toLocaleString('pl', {
        hour: 'numeric',
        minute: 'numeric'
      })}
    </div>
  );
};

export default Timer;
