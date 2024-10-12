import { useEffect, useState } from "react";

const EventDetails = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [isRegisterPhase, setIsRegisterPhase] = useState(false);

  useEffect(() => {
    const preRegisterDate = new Date("October 30, 2024 00:00:00").getTime();
    const registerDate = new Date("November 7, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      let targetDate = preRegisterDate;
      
      if (now > preRegisterDate && now < registerDate) {
        targetDate = registerDate;  // Switch to REGISTER phase
        setIsRegisterPhase(true);   // Mark as "REGISTER" phase
      } else if (now > registerDate) {
        setIsEventStarted(true);    // Event is fully started after REGISTER phase
        clearInterval(interval);    // Stop countdown after event starts
        return;
      }

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
    <div className="grid grid-col-1 space-y-5 mt-10 mb-10">
      <div className="flex-1 text-center mb-4">
        <h2 className=" font-bold text-4xl lg:mb-5 text-yellow-700">Time Until Event</h2>
        <div className="grid grid-flow-col gap-5 text-center justify-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.days }}></span>
            </span>
            <span className="text-sm md:text-base">days</span>
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

      <div className="flex-1 text-center mb-4">
        {/* Conditionally change the button text */}
        <a
          href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer"
          className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
        >
          {isEventStarted ? "REGISTER CLOSED" : isRegisterPhase ? "REGISTER" : "PRE-REGISTER"}
        </a>
      </div>
      
      {
        isEventStarted ?
        <p className="text-center text-xl text-bold">Registration is closed</p> :
        <p></p>
      }
    </div>
  );
};

export default EventDetails;
