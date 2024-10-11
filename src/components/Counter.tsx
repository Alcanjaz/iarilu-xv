import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

const Counter = ({ targetDate }: {targetDate: string}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {} as TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center space-x-4 text-xl">
      <div>
        <span>{timeLeft.days || '0'}</span> días
      </div>
      <div>
        <span>{timeLeft.hours || '0'}</span> horas
      </div>
      <div>
        <span>{timeLeft.minutes || '0'}</span> minutos
      </div>
      <div>
        <span>{timeLeft.seconds || '0'}</span> segundos
      </div>
    </div>
  );
};

export default Counter;
