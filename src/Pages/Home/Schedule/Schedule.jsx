
import { motion } from "framer-motion";
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
    <motion.div className="flex flex-col items-center justify-center lg:-mt-28  rounded-lg shadow-lg "
    initial={{scale:.6,opacity:0,y:'-5px'}}
    animate={{scale:1,opacity:1,y:'5px'}}
    transition={{type:'spring',delay:1,duration:2,stiffness:350,damping:70}}
    > 
  {/* Card-like appearance with reduced padding and added rounded corners and shadow */}
  
      <div className="grid grid-flow-col lg:gap-8 sm:gap-5 text-center lg:px-10 sm:px-5 md:p-5 py-5 -translate-y-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 auto-cols-max rounded-xl"> {/* Reduced gap between grid items */}
        <div className="flex flex-col sm:p-2 md:p-2 lg:p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl lg:font-bold text-white"> {/* Slightly reduced font size for more compact look */}
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          <span className="text-xs md:text-sm">days</span> {/* Adjusted label size for compactness */}
        </div>
        <div className="flex flex-col sm:p-2 md:p-2 lg:p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl lg:font-bold text-white">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          <span className="text-xs md:text-sm">hours</span>
        </div>
        <div className="flex flex-col sm:p-2 md:p-2 lg:p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl lg:font-bold text-white">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          <span className="text-xs md:text-sm">min</span>
        </div>
        <div className="flex flex-col sm:p-2 md:p-2 lg:p-4 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl lg:font-bold text-white">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          <span className="text-xs md:text-sm">sec</span>
        </div>
      </div>
    </motion.div>



  );
};

export default Schedule;
