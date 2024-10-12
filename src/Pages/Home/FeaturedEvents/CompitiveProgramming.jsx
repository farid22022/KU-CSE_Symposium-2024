import { motion } from 'framer-motion'; // Make sure to import motion if using framer-motion
import image from "./../../../../public/Banner/ImageOfCP.jpg";
import "./Compitive.css";

const CompitiveProgramming = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-6 backImageCP p-4 sm:p-6 md:p-20 space-y-2 sm:space-y-4 md:space-y-8 justify-around items-center min-h-screen">
            
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
                <div className="sm:p-6 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200 h-full flex flex-col justify-center py-8">
                    <p className="text-sm sm:text-base md:text-lg">
                        Join industry leaders as they share their insights and innovations in technology and data.
                    </p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Location:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Networking:</p>
                        </div>
                        <div>
                            <p className="text-xs sm:text-md md:text-base text-start">November 9, 2024</p>
                            <p className="text-xs sm:text-md md:text-base text-start">Computer Lab, CSE Discipline</p>
                            <p className="text-xs sm:text-md md:text-base text-start">C,C++,Java,Python</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <a
                            href="/cp"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            LEARN MORE
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc19e1XkB1hkc4xlPjstSgiqGFJ9QKIElyblW-Xot-YNYReog/viewform "
                            target="_blank" // Opens link in a new tab
                            rel="noopener noreferrer" 
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            REGISTER!
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Image Section */}
            <div className="flex justify-center items-center w-full sm:py-2 lg:w-1/2 sm:h-1/2 h-full">
                <motion.img
                    animate={{ scaleY: 0.70, y: '-10px' }}
                    transition={{ type: "spring", damping: 70, duration: 1 }}
                    className="w-full h-full object-cover md:rounded-2xl sm:p-2 md:p-0"
                    src={image}
                    alt="Competitive Programming"
                />
            </div>
        </div>
    );
};

export default CompitiveProgramming;
