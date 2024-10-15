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
            <div className={`flex flex-col lg:flex-row lg:justify-between items-start lg:pt-5 lg:space-x-6 ${scroll ? "text-black" : "text-white"}`}>
            <li><a className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-500 ${scroll ? "hover:text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"}`} href="/">Home</a></li>
            <li><a className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-500 ${scroll ? "hover:text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"}`} href="/ps">Symposium Talk</a></li>
            <li><a className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-500 ${scroll ? "hover:text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"}`} href="/datathon">Datathon</a></li>
            <li><a className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-500 ${scroll ? "hover:text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"}`} href="/cp">Programming Contest</a></li>
            <li><a className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-500 ${scroll ? "hover:text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"}`} href="/innovations">Innovation Showcasing</a></li>
            <li><a className={`text-sm lg:text-base xl:text-lg font-semibold transition-all duration-500 ${scroll ? "hover:text-white" : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"}`} href="/about">About Us</a></li>
        </div>
    );

    return (
        <div className={`container mx-auto z-[70] px-5 flex justify-between items-center my-5 fixed top-0 left-1/2 transform -translate-x-1/2 text-white transition-all duration-500 -translate-y-4 ${scroll ? "bg-gradient-to-r from-orange-500 to-red-500 mt-4 rounded-b-2xl" : "bg-opacity-0"}`}>
            <div className="w-2/12">
                {/* First image: Visible on lg and larger, hidden on sm and md */}
                <div>
                    <a className="w-full">
                        <motion.img
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', damping: 60, stiffness: 350, duration: 1, delay: 0.2 }}
                            className="w-3/4 xl:w-1/2" 
                            src={logo}
                            alt="Logo"
                        />
                    </a>
                </div>
            </div>

            <div>
                <ul className="hidden lg:flex px-1">
                    {navOptions}
                </ul>

                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="lg:hidden">
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
                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-fit p-2"
                    >
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
