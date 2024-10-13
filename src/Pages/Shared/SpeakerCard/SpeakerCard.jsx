import { motion } from "framer-motion";
const SpeakerCard = ({ speaker,index }) => {
    return (
        <motion.div className="p-2"
        initial={{scale:.6,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{type:'spring',duration:1.8,delay:index*1.1}}
        > {/* Reduced padding */}
            <div className="card bg-slate-900 w-60 h-60 shadow-2xl shadow-black">
                <figure className="px-10 pt-10">
                    <img
                        src={speaker.image}
                        alt="Speaker"
                        className="rounded-xl pt-1" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className=" text-white text-base font-semibold bg-slate-900 rounded-xl -mt-6">{speaker.speaker}</h2>
                    <p className="text-yellow-700 font-semibold">{speaker.schedule}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default SpeakerCard;
