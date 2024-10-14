import { motion } from 'framer-motion'; // Make sure to import motion if using framer-motion
import image from "./../../../../public/Banner/IUPC.png";
import "./Compitive.css";

const CompitiveProgramming = () => {
    return (
        <div className="container mx-auto">
            <div className='md:w-[87%] mt-14 mb-8 mx-auto p-2 flex flex-col-reverse lg:flex-row justify-around items-center gap-2 sm:gap-4 shadow-lg rounded-lg'>
                {/* Text Section */}
                <div className="lg:w-1/2 xl:w-[45%] mb-1 sm:mb-3 lg:mb-0 text-left bg-white rounded-lg">
                    <div className="p-5 sm:p-8 rounded-xl text-black">
                        <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-5">Programming Contest</h2>
                        <p className="text-gray-600 mb-4">
                        Test your coding skills by solving complex problems in a timed competition.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 w-fit"> {/* Flex container for responsiveness */}
                            <a
                                href="/innovations"
                                className="inline-block border-2 border-gray-500 text-black font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-none transition text-center"
                            >
                                Explore More
                            </a>
                            <a
                                href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
                                target="_blank" // Opens link in a new tab
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md transition text-center"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/2 xl:w-[45%] flex">
                    <img className="w-[95%] lg:w-full rounded-xl mx-auto" animate={{ scale: 1.1 }} src={image} alt="Competitive Programming" />
                </div>
            </div>
        </div>
    );
};

export default CompitiveProgramming;
