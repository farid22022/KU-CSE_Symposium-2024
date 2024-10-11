
import { motion } from 'framer-motion';

const NextStepCallToAction = () => {
    return (
        <div className="bg-indigo-600 text-white p-8 rounded-lg shadow-md max-w-xl mx-auto my-10">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-3xl font-bold text-center mb-6"
            >
                📧 Your Next Step
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-lg leading-relaxed text-center"
            >
                Send your poster PDF before the deadline for pre-selection by our expert judges. This is your shot to bring your innovative vision to life and take your idea to the next level. Don’t just imagine change—create it! 🌱✨
            </motion.p>
        </div>
    );
};

export default NextStepCallToAction;
