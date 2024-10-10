import cluster from "./../../../../public/logo/cluster.png";
import KU from "./../../../../public/logo/khulna-university-logo.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-8">
        <motion.img
            src={KU}
            alt="Khulna University Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-4 lg:mb-0 lg:mr-6"
            initial={{ opacity: 0, x: -50,scale:.3 }}
            animate={{ opacity: 1, x: 0,scale:1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Motion for Cluster logo */}
          <motion.img
            src={cluster}
            alt="Cluster Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            initial={{ opacity: 0, x: 50,scale:.3 }}
            animate={{ opacity: 1, x: 0,scale:1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-3xl sm:text-4xl text-yellow-700 md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Welcome to the KUCSE Symposium 2024, where bright minds and innovative ideas converge. 
            We are dedicated to fostering an environment that promotes learning, collaboration, and 
            growth among students, professionals, and industry leaders. Whether you're here for our 
            competitive programming contests, engaging talks, or networking opportunities, our event 
            is designed to inspire and empower everyone who participates.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Join us for a series of exciting events, including Competitive Programming, Datathon, 
            CEO Talks, and Innovation challenges. Here, you will have the chance to showcase your 
            skills, learn from experts, and push the boundaries of technology and creativity.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We believe in the power of collaboration and the impact of innovation, and we're 
            excited to have you with us for this incredible experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
