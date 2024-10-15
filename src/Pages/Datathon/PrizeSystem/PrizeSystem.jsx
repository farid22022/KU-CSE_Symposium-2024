import { motion } from 'framer-motion';

const PrizeSystem = () => {
    const prizes = [
        { title: '1st Runner Up', reward: '10000 BDT + Certificate' },
        { title: 'Winner', reward: '15000 BDT + Certificate' },
        { title: '2nd Runner Up', reward: '8000 BDT + Certificate' },
    ];

    return (
        <div className="p-8 rounded-lg  mt-10 max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-3xl font-bold text-center mb-6"
            >
                Win Big & Make an Impact!
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 shadow-md p-10 gap-8">
                {/* 2nd place */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-6 order-3 sm:order-1 rounded-lg shadow transition duration-300"
                >
                    <h3 className="text-xl font-bold text-center">{prizes[0].title}</h3>
                    <p className="text-lg font-medium text-center mt-3">{prizes[0].reward}</p>
                </motion.div>

                {/* 1st place (Focused in the middle) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-violet-400 order-2 sm:order-1 p-8 rounded-lg shadow-xl transition duration-300"
                >
                    <h3 className="text-2xl font-[900] text-center">{prizes[1].title}</h3>
                    <p className="text-lg font-medium text-center mt-3">{prizes[1].reward}</p>
                </motion.div>

                {/* 3rd place */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-6 order-4 sm:order-1 rounded-lg shadow transition duration-300"
                >
                    <h3 className="text-xl font-semibold text-center">{prizes[2].title}</h3>
                    <p className="text-lg font-medium mt-3 text-center">{prizes[2].reward}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default PrizeSystem;
