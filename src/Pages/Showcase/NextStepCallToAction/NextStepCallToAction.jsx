
import { motion } from 'framer-motion';

const NextStepCallToAction = () => {
    return (
        <div className="bg-indigo-900 text-white p-8 rounded-lg shadow-md max-w-xl mx-auto my-10">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-3xl font-bold text-center mb-6"
            >
                
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-lg leading-relaxed text-center"
            >
                Send your poster PDF before the deadline for pre-selection by our expert judges. This is your shot to bring your innovative vision to life and take your idea to the next level. Don’t just imagine change—create it! 🌱✨
            </motion.p>
            <div className="text-center mt-5">
                <a
                    href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                >
                    SEND POSTER!
                </a>
            </div>
        </div>
    );
};

export default NextStepCallToAction;
