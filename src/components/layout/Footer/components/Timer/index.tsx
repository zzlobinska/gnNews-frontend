import { useEffect, useState } from 'react';

const Timer = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30_000);
  }, []);

  return (
    <div>
      {dateState.toLocaleString('pl', {
        hour: 'numeric',
        minute: 'numeric'
      })}
    </div>
  );
};

export default Timer;
