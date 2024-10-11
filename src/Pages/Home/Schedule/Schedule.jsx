

import { useState, useEffect } from "react";

const Schedule = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("November 9, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  p-4 md:p-8 lg:p-12"> {/* Flex container for centering */}
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-bold text-center">
        <span className="text-yellow-700">Synergy - X 2024: </span>Time to
        Innovate is Ticking Down!
      </p>
      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white p-3 text-center"> {/* Center text */}
        Join us for a groundbreaking event in tech and ideas!
      </p>
      
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max"> {/* Grid layout for countdown */}
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl"> {/* Increased font size */}
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          <span className="text-sm md:text-base">days</span> {/* Adjusted label size */}
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          <span className="text-sm md:text-base">hours</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          <span className="text-sm md:text-base">min</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          <span className="text-sm md:text-base">sec</span>
        </div>
      </div>
    </div>


  );
};

export default Schedule;
