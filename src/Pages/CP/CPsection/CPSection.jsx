import { motion } from "framer-motion";
import CPRules from './CPRules';
import './CPSection.css'; // Make sure to create this CSS file for styling

const CPSection = () => {
  return (
    <div className="cp-section text-white py-10 px-5 mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-700 text-center mb-4">
          Contest Programming (CP)
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
          Test your problem-solving skills in our Competitive Programming contest. Engage in mind-bending challenges designed to push your limits, develop your coding prowess, and face off against the best minds in the industry.
        </p>
        
        <div className="lg:p-10 md:p-3 text-center">
          <motion.div 
          initial={{scale:.3,opacity:0}}
          animate={{scale:1,opacity:1}}
          transition={{type:'spring',damping:70,duration:2.5,delay:1,stiffness:350}}
          className="event-card bg-gray-800 p-6 rounded-lg"
            >
            <h3 className="text-2xl text-amber-600 font-bold mb-2">
              Problem Solving Marathon
            </h3>
            <p className="text-gray-300 mb-4">
              Compete in a marathon of coding challenges and solve real-world problems that require analytical thinking and efficient coding techniques.
            </p>
            <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800">
              Register Now !
            </button>
          </motion.div>
        </div>
      </div>

      <CPRules></CPRules>
    </div>
  );
};

export default CPSection;
