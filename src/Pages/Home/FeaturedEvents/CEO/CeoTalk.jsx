import image from "./../../../../../public/Banner/CeoTalkImage3.jpg";
import "./ceo.css";
import { motion } from "framer-motion";

const CeoTalk = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-4 backImageCEO p-4 sm:p-6 md:p-20 space-y-5 md:space-y-8 justify-around">
            {/* Image Section */}
            <div className="flex justify-center items-center w-full lg:w-1/2 h-3/4">
                <motion.img animate={{scale:.79 ,y:'-24px'}} transition={{type:"spring",damping:70,duration:2}} className="w-full h-full object-cover md:rounded-2xl py-4 shadow-2xl shadow-slate-950" src={image} alt="Competitive Programming" /> {/* Adjust image size and height */}
            </div>
            
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center  h-full">
                <motion.div  className="sm:p-6 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200 h-full flex flex-col justify-center py-8">
                    <p className="text-sm sm:text-base md:text-lg ">
                        Join industry leaders as they share their insights and innovations in technology and data.
                    </p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Location:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Keynote Speakers:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Networking:</p>
                        </div>
                        <div>
                            <p className="text-xs sm:text-md md:text-base text-start">November 9, 2024</p>
                            <p className="text-xs sm:text-md md:text-base text-start">University Auditorium</p>
                            <p className="text-xs sm:text-md md:text-base text-start">Renowned experts from top tech companies.</p>
                            <p className="text-xs sm:text-md md:text-base text-start">Connect with professionals and fellow enthusiasts.</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <a
                            href="/ps"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            LEARN MORE
                        </a>
                        <a
                            href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
                            target="_blank" // Opens link in a new tab
                            rel="noopener noreferrer" 
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            REGISTER!
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CeoTalk;
