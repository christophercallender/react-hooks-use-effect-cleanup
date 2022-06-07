import React, { useState, useEffect } from 'react';

function Clock() {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const intervalID = //added to control setInterval
         setInterval(() => {
            setTime(new Date());
         }, 1000);

      //added to prevent memory leak
      return function cleanup() {
         clearInterval(intervalID);
      };
   }, []);

   return <div>{time.toString()}</div>;
}

export default Clock;
