
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
    <motion.div className="container mx-auto flex flex-col items-center justify-center rounded-lg"
    initial={{scale:.6,opacity:0,y:'5px'}}
    animate={{scale:1,opacity:1,y:'5px'}}
    transition={{type:'spring',delay:1,duration:2,stiffness:350,damping:70}}
    > 
  {/* Card-like appearance with reduced padding and added rounded corners and shadow */}
  
      <div className="grid grid-flow-col gap-2 sm:gap-5 lg:gap-8 p-3 md:p-5 lg:p-7 text-center translate-y-1 auto-cols-max rounded-xl font-semibold text-black"> {/* Reduced gap between grid items */}
        <div className="flex flex-col p-2 bg-[#37a3cf] sm:p-2 lg:p-4 rounded-box font-semibold">
          <span className="countdown font-mono text-2xl md:text-3xl lg:text-5xl lg:font-bold "> {/* Slightly reduced font size for more compact look */}
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          <span className="text-xs md:text-sm">days</span> {/* Adjusted label size for compactness */}
        </div>
        <div className="flex flex-col p-2 bg-[#59d9e3] sm:p-2 lg:p-4 rounded-box">
          <span className="countdown font-mono text-2xl md:text-3xl lg:text-5xl lg:font-bold ">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          <span className="text-xs md:text-sm">hours</span>
        </div>
        <div className="flex flex-col p-2 bg-[#31afd3] sm:p-2 lg:p-4 rounded-box">
          <span className="countdown font-mono text-2xl md:text-3xl lg:text-5xl lg:font-bold ">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          <span className="text-xs md:text-sm">min</span>
        </div>
        <div className="flex flex-col p-2 bg-[#df6951] sm:p-2 lg:p-4 rounded-box">
          <span className="countdown font-mono text-2xl md:text-3xl lg:text-5xl lg:font-bold ">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          <span className="text-xs md:text-sm">sec</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;
