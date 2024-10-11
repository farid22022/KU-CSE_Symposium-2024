import { motion } from "framer-motion";
import logo from "./../../../../public/logo/synaery2-removebg-preview.png";
import { useEffect, useState } from "react";

const NavBar = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true); // When scrolled 50px down, background becomes black
            } else {
                setScroll(false); // Reset background when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navOptions = (
        <div className="flex flex-col sm:flex-row pt-5 space-y-2 sm:space-y-0 sm:space-x-4">
            <li><a className=" hover:shadow-inner hover:shadow-white transition-all duration-700" href="/">Home</a></li>
            <li><a className=" hover:shadow-inner hover:shadow-white transition-all duration-700" href="/ps">Symposium Talk</a></li>
            <li><a className=" hover:shadow-inner hover:shadow-white transition-all duration-700" href="/innovations">Innovation Showcasing</a></li>
            <li><a className=" hover:shadow-inner hover:shadow-white transition-all duration-700" href="/cp">Programming Contest </a></li>
            <li><a className=" hover:shadow-inner hover:shadow-white transition-all duration-700" href="/datathon">Datathon</a></li>
            <li><a className=" hover:shadow-inner hover:shadow-white transition-all duration-700" href="/about">About Us</a></li>
        </div>
    );

    return (
        <div className={`navbar fixed z-10 max-w-screen text-white transition-all duration-500 -translate-y-4 ${scroll ? "bg-black" : "bg-opacity-0"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navOptions}
                    </ul>
                </div>

                {/* First image: Visible on lg and larger, hidden on sm and md */}
                <a className=" ">
                    <motion.img
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 60, stiffness: 350, duration: 2.5, delay: 1.5 }}
                        className="w-1/3 p-0 hidden lg:block" 
                        src={logo}
                        alt="Logo"
                    />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end">
                {/* Second image: Visible on sm and md, hidden on lg */}
                <a className=" ">
                    <motion.img
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 60, stiffness: 350, duration: 2.5, delay: 1.5 }}
                        className="w-1/3 p-0 block lg:hidden" 
                        src={logo}
                        alt="Logo"
                    />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
