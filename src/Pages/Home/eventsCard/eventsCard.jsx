import { useState, useEffect } from 'react';
import './SlidingCard.css'; // Import the CSS for animations
import dateLogo from "./../../../../public/logo/schedule.png"
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
const eventCards = [
    {
        title: 'IUPC',
        description: 'Showcase your problem-solving skills and shine together.',
        date: 'Nov 1',
        image: 'path-to-image1',
    },
    {
        title: 'Hackathon',
        description: '24-hour challenge for coding enthusiasts.',
        date: 'Nov 3',
        image: 'path-to-image2',
    },
    {
        title: 'Poster Presentation',
        description: 'Show your creativity with innovative posters.',
        date: 'Nov 5',
        image: 'path-to-image3',
    },
    // Add more event cards as needed
];

const SlidingCard = () => {
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % eventCards.length);
        }, 2000); // Change card every 3 seconds

        return () => clearInterval(interval);
    }, [currentCard]);

    return (
        <div className="sliding-card-container pb-5">
            {/* 3D Circle */}
            <div className="circle"></div>

            {/* Centered Content Wrapper */}
            <div className="text-center flex flex-col items-center justify-center lg:-mb- border-2 border-red-700 ">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold p-2">
                    <Typewriter
                        options={{
                            strings: ['WELCOME', 'TO'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2 "
                    initial={{ y: "50px", opacity: 0 }}
                    animate={{ y: "0", opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        duration: 2,
                        repeatType: "reverse",
                    }}
                >
                    <div className="text-white">
                        <h3 className="text-4xl font-bold text-yellow-700">
                            NATIONAL SYMPOSIUM ON INDUSTRY-ACADEMIA
                        </h3>
                        <h3 className="text-4xl font-bold text-yellow-700">
                            COLLABORATION FOR ICT-ENABLED BANGLADESH
                        </h3>
                    </div>
                </motion.h1>

                {/* Center the date and dropdown menu */}
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ x: "760px", y: "10px", opacity: 0 }}
                        animate={{ x: "0px", y: "0px", opacity: 1 }}
                        transition={{
                            type: "spring",
                            damping: 70,
                            stiffness: 350,
                            duration: 2,
                            repeatType: "reverse",
                        }}
                        className="flex items-center justify-center space-x-2"
                    >
                        <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                        <h4 className="font-semibold text-sm md:text-base lg:text-lg">
                            10-12 November, 2024
                        </h4>
                    </motion.div>

                    {/* Dropdown using <details> and <summary> */}
                    <details className="dropdown ">
                        <summary className="btn bg-amber-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
                            Register
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                                <a
                                    href="https://forms.gle/2W3AGyuvKv6YWMMK8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:bg-gray-100 px-4 py-2"
                                >
                                    Symposium Talk
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://forms.gle/KdZ4BuCSAZ61e17t7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:bg-gray-100 px-4 py-2"
                                >
                                    Innovation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSc19e1XkB1hkc4xlPjstSgiqGFJ9QKIElyblW-Xot-YNYReog/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:bg-gray-100 px-4 py-2"
                                >
                                    Contest Programming
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-gray-100 px-4 py-2">Datathon</a>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>

            {/* Event Card */}
            <div className="event-card-container text-end">
                {eventCards.map((card, index) => (
                    <div
                        key={index}
                        className={`event-card bg-slate-900 max-w-xs items-end ${currentCard === index ? 'active' : ''}`}
                    >
                        <div className="event-info">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <p className="event-date">{card.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3D Square */}
            <div className="square"></div>
        </div>
    );
};

export default SlidingCard;





