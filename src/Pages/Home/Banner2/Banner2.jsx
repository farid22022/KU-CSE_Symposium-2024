import { motion } from "framer-motion";
import "./Banner2.css"

const Banner2 = () => {
    return (
        <div className="backImage2 h-screen ">
            <div className=" justify-end items-end p-5 lg:py-52 lg:mb-5 text-center"> 
                <motion.h1 
                    className="text-6xl font-extrabold lg:pb-5 text-yellow-700"
                    initial={{y:'10px', opacity: 0}}
                    animate={{y:'0px', opacity: 1}}
                    transition={{type:'spring', delay: 0, duration: 1, damping: 70, repeatType: 'reverse'}}
                >
                    SYMPOSIUM
                </motion.h1>
                <motion.div
                    initial={{y: '10px', opacity: 0}}
                    animate={{y: '0px', opacity: 1}}
                    transition={{type: 'spring', delay: 1, duration: 1, damping: 70, repeatType: 'reverse',}}
                >
                    <p className="text-4xl font-semibold text-white">KUCSE</p>
                    <p className="text-4xl font-semibold text-white">SYMPOSIUM - 2024</p>
                </motion.div>
                <div>
                    <motion.details className="dropdown mt-3"
                        initial={{y: '12px', opacity: 0}}
                        animate={{y: '0px', opacity: 1}}
                        transition={{type: 'spring', delay: .7, duration: 1.5, damping: 70, repeatType: 'reverse',}}
                    >
                        <summary className="btn bg-amber-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer text-sm md:text-base lg:text-lg sm:w-full">
                            Register
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a href="https://forms.gle/KdZ4BuCSAZ61e17t7" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-100 px-4 py-2">Innovation</a></li>
                            <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Contest Programming</a></li>
                            <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Datathon</a></li>
                        </ul>
                    </motion.details>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
