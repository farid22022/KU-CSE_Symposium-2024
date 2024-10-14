import image from "./../../../../../public/Banner/Symposium-Talk.png";
import { motion } from "framer-motion";

const CeoTalk = () => {
    return (
        <div className="relative mx-auto container">
            
            <div className="md:w-[80%] lg:w-[88%] mt-14 mb-8 mx-auto p-2 flex flex-col-reverse lg:flex-row justify-around items-center gap-2 sm:gap-4 shadow-lg rounded-lg">
                {/* Text Section */}
                <div className="lg:w-1/2 xl:w-[45%] mb-1 sm:mb-3 lg:mb-0 text-left bg-white rounded-lg">
                    <div className="p-5 sm:p-8 md:p-10 rounded-xl text-black">
                        <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-5">Symposium Talk</h2>
                        <p className="text-gray-600 mb-4">
                        Join industry leaders as they share their insights and innovations in technology and data.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 w-fit"> {/* Flex container for responsiveness */}
                            <a
                                href="/ps"
                                className="inline-block border-2 border-gray-500 text-black font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-none transition text-center"
                            >
                                Explore More
                            </a>
                            <a
                                href="https://forms.gle/2W3AGyuvKv6YWMMK8 "
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
                <div className="lg:w-1/2 xl:w-[45%] flex p-4">
                    <motion.img className="w-[95%] lg:w-full rounded-xl mx-auto" animate={{ scale: 1.1 }} src={image} alt="Symposium Talk" />
                </div>
            </div>
        </div>
    );
};

export default CeoTalk;
