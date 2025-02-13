"use client";
import { useState, useEffect } from "react";

const CountdownTimer = ({ hoursInput }) => {
  const [time, setTime] = useState({
    days: Math.floor(hoursInput / 24),
    hours: hoursInput % 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-2 sm:space-x-4">
      {time.days > 0 && (
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold">{time.days}</span>
          <span className="text-[10px] sm:text-xs text-gray-500 block">
            DAY
          </span>
        </div>
      )}

      {time.hours > 0 && (
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold">{time.hours}</span>
          <span className="text-[10px] sm:text-xs text-gray-500 block">
            HRS
          </span>
        </div>
      )}

      {time.minutes > 0 && (
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold">
            {time.minutes}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 block">
            MIN
          </span>
        </div>
      )}

      {time.seconds > 0 && (
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold">
            {time.seconds}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 block">
            SEC
          </span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
