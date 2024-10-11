import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import map from "./../../../../public/logo/map (1).png"
import Components from "../Components/Components";

const Overview = () => {
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
        <div className="flex flex-col items-center justify-center space-y-12 mt-12 pt-10 ">
            <div className="w-3/4 text-center">
                <h1 className="text-center text-2xl text-yellow-700">Rules and Regulations</h1>
                <p className="text-white">Coming Soon</p>
            </div>
            <div className="w-3/4 text-center">
                <h1 className="text-center text-2xl text-yellow-700">Importance of Datathons</h1>
                <p className="text-white">Datathons offer students and professionals a chance to apply theoretical knowledge to practical challenges, enhancing their skills. They provide opportunities to learn, network with industry experts, and collaborate with peers, making them a valuable platform for innovation and career growth.</p>
            </div>
        </div>

    );
};

export default Overview;