import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => tick(), 1000)

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      
      <h1 className='text-2xl font-bold mb-4'>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;