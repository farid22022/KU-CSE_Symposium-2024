import { motion } from "framer-motion";

const InnovationsOverview = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center min-h-screen p-5 text-center">
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2.5, delay: 1, damping: 70, stiffness: 360 }}
        className="bg-slate-700 p-6 opacity-65 rounded-lg shadow-md max-w-2xl w-full md:w-2/3 lg:w-1/2"
      >
        <h2 className="text-2xl font-semibold mb-2 text-yellow-700">Rules and Regulations</h2>
        <p>Coming Soon</p>
      </motion.div>
    </div>
  );
};

export default InnovationsOverview;
