import { motion } from "framer-motion";
const ExternalButton = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 pb-16">
        {/* Pre-selection Result Button */}
        <motion.div className="text-center bg-slate-950  p-5 rounded-md"
        initial={{scale:0.6,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{type:'spring',duration:1.5,delay:.5,damping:70}}
        >
          <div className="grid mb-2">
                <h2 className="text-lg font-semibold text-white "> Pre-Selection</h2>
                <h2 className="text-lg font-semibold text-white ">Result Announcement</h2>
          </div>
          <a
            href="#"
            className="inline-block bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300"
          >
            2 November
          </a>
        </motion.div>
  
        {/* Final Submission Button */}
        <motion.div className="text-center bg-slate-950 p-5 rounded-md"
        initial={{scale:0.6,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{type:'spring',duration:1.5,delay:.5,damping:70}}
        >
            <div className="grid mb-2">
                    <h2 className="text-lg font-semibold text-white "> Final Poster Submission</h2>
                    <h2 className="text-lg font-semibold text-white "> and Registration</h2>
            </div>
          <a
            href="#"
            className="inline-block bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300"
          >
            2 to 7 November
          </a>
        </motion.div>
      </div>
    );
  };
  
  export default ExternalButton;
  