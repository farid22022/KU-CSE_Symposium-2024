import { useEffect, useState } from "react";
import PersonCard from "../../Shared/PersonCard/PersonCard";
import { motion } from "framer-motion";

const CEOs = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('persons.json')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    // Define the animation variant for each card
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <div className="w-full text-center p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 justify-items-center">
                {
                    persons.map((person, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05 }} // Add hover effect for slight scaling
                        >
                            <PersonCard person={person} />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default CEOs;
