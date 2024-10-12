
import { motion } from 'framer-motion';

const PrizeSystem = () => {
    const prizes = [
        { title: '🏆 Champion', reward: '15000 BDT + Certificate' },
        { title: '🥈 1st Runner-up', reward: '10000 BDT + Certificate' },
        { title: '🥉 2nd Runner-up', reward: '7000 BDT + Certificate' },
        { title: '🥉 3rd Runner-up', reward: '5000 BDT + Certificate' },
        { title: '🥉 4rd Runner-up', reward: '5000 BDT + Certificate' },
    ];

    return (
        <div className="bg-gray-700 text-white p-8 rounded-lg shadow-md mt-10 max-w-xl mx-auto mt-10">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-3xl font-bold text-center mb-6"
            >
                Win Big & Make an Impact!
            </motion.h2>
            <ul className="space-y-4">
                {prizes.map((prize, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.6 }}
                        className="bg-gray-950 p-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
                    >
                        <h3 className="text-xl font-semibold">{prize.title}</h3>
                        <p className="text-lg">{prize.reward}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default PrizeSystem;
