import { useEffect, useState } from "react";

const EventDetails = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isRegisterPhase, setIsRegisterPhase] = useState(false);

  useEffect(() => {
    const targetDate = new Date("November 9, 2024 00:00:00").getTime();
    const registerStartDate = new Date("October 22, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Check if we are in the registration phase
      if (now >= registerStartDate) {
        setIsRegisterPhase(true);
      }

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
    <div className="grid grid-col-1 space-y-5 mt-10"> {/* Single column on smaller screens */}
      <div className="flex-1 text-center mb-4">
        <h2 className="font-bold text-4xl lg:mb-5 text-yellow-700">Time Until Event</h2>
        <div className="grid grid-flow-col gap-5 text-center justify-center auto-cols-max"> {/* Center items for small screens */}
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
        <p className="text-lg font-bold text-yellow-700 mb-2">
          {
            !isRegisterPhase ? 
            <h2>Registration will start from 24 October,2024</h2>
            :
            <h2 className="grid"><p>Pre-Registration's deadline is over</p><p>Contest held On 10 November,24</p></h2>
          }
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc19e1XkB1hkc4xlPjstSgiqGFJ9QKIElyblW-Xot-YNYReog/viewform "
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Adjust the link as necessary
          className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
        >
          {isRegisterPhase ? "REGISTER" : "PRE-REGISTER !"}
        </a>
      </div>
    </div>
  );
};

export default EventDetails;
