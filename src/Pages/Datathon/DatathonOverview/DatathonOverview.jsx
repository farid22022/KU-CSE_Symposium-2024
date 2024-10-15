import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import teamMember from "./../../../../public/logo/members.png"
import regFee from "./../../../../public/logo/reg-fee.png"

const ProgressCards = () => {
  const [sectionVisible, setSectionVisible] = useState(false); // Track section visibility
  const [visibleCards, setVisibleCards] = useState([false,false, false, false]); // Track visibility of each card
  const sectionRef = useRef(null); // Ref for the entire section
  const cardRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each card

  useEffect(() => {
    // Observer for the entire section visibility
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true); // Trigger section visibility
            setVisibleCards([true,true, true, true]); // Reset card visibility
          } else {
            setSectionVisible(false); // Reset section visibility
            setVisibleCards([false,false, false, false]); // Reset card visibility
          }
        });
      },
      { threshold: 0.3} // Section visibility threshold
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative container mx-auto flex flex-col justify-center py-8">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-violet-700 text-center mb-14">
        Datathon Overview
      </h2>

      {/* Cards: Left and Right Alternating */}
      <div className="mx-auto flex flex-col gap-16 w-full max-w-5xl shadow-lg p-5">
        {/* First card on the left */}
        <motion.div
          ref={cardRefs[0]}
          className="bg-white text-black p-6 rounded-lg shadow-2xl lg:w-[48%]"
          initial={{ x: "-100px", opacity: 0 }} // Start off-screen to the left
          animate={sectionVisible && visibleCards[0] ? { x: "0px", opacity: 1 } : {}} // Animate when section is visible
          transition={{
            type: "spring",
            damping: 70,
            stiffness: 350,
            duration: 1,
            delay: 0.2, // Delay for first card
          }}
          onViewportEnter={() => setVisibleCards(prev => { const updated = [...prev]; updated[0] = true; return updated; })} // Animate when card comes into view
        >
          <h1 className="text-violet-600 text-2xl mb-4 font-bold">Registration</h1>
          <h1 className="text-red-500 font-semibold text-lg">Must Register before the grooming session starts</h1>
          <div className="font-normal text-base my-3  flex items-center gap-3">
            <img src={regFee} alt="Registration Fee" className="w-8 h-8" />
            <h1><span className='font-semibold text-lg'>Registration Fee : </span>1500TK per each team</h1>
          </div>
          <div className="font-normal text-base  flex items-center gap-3">
            <img src={teamMember} alt="Team Members" className="w-8 h-8" />
            <h1><span className='font-semibold text-lg'>Teams Members : </span> 3 Member (<span className="text-red-500 font-medium">MAX</span>)</h1>
          </div>
        </motion.div>

        {/* Second card on the right */}
        <motion.div
          ref={cardRefs[1]}
          className="bg-white text-black p-6 rounded-lg shadow-2xl lg:w-1/2 lg:ml-auto"
          initial={{ x: "100px", opacity: 0 }} // Start off-screen to the right
          animate={sectionVisible && visibleCards[1] ? { x: "0px", opacity: 1 } : {}} // Animate when section is visible
          transition={{
            type: "spring",
            damping: 70,
            stiffness: 350,
            duration: 1,
            delay: 0.5, // Delay for second card
          }}
          onViewportEnter={() => setVisibleCards(prev => { const updated = [...prev]; updated[1] = true; return updated; })} // Animate when card comes into view
        >
          <h3 className="text-violet-600 text-2xl mb-4 font-bold">Grooming Sessions</h3>
          <h1 className="text-red-500 font-semibold text-lg">Must join to participate in preliminary</h1>
          <p className="mt-3">Teams will join in 5 interactive grooming sessions designed to prepare them for the preliminary round, offering hands-on experience in data science, expert guidance, and fostering collaboration, benefiting participants of all skill levels.</p>
          <h1 className='mt-3 font-semibold text-lg'>Session Outline : </h1>
          <ul className="list-disc font-medium text-lg mt-3 ml-5 space-y-2">
            <li>Data Cleaning</li>
            <li>Data Engineering</li>
            <li>Model Training</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision</li>
          </ul>
        </motion.div>

        {/* Third card on the left */}
        <motion.div
          ref={cardRefs[2]}
          className="bg-white text-black p-6 rounded-lg shadow-2xl lg:w-[48%]"
          initial={{ x: "-100px", opacity: 0 }} // Start off-screen to the left
          animate={sectionVisible && visibleCards[2] ? { x: "0px", opacity: 1 } : {}} // Animate when section is visible
          transition={{
            type: "spring",
            damping: 70,
            stiffness: 350,
            duration: 1,
            delay: 0.8, // Delay for third card
          }}
          onViewportEnter={() => setVisibleCards(prev => { const updated = [...prev]; updated[2] = true; return updated; })} // Animate when card comes into view
        >
          <h3 className="text-violet-600 text-2xl mb-4 font-bold">Preliminary Round</h3>
          <p className="text-lg font-medium">
            <ul className='list-disc ml-4'>
              <li className='mb-3'><span className='font-semibold text-lg'>Challenge Format : </span>Teams will engage in a virtual preliminary data challenge after the grooming sessions</li>
              <li className='mb-3'><span className='font-semibold text-lg'>Evaluation Criteria : </span>Judging will focus on technical accuracy, creativity in problem-solving, and teamwork</li>
              <li className='mb-3'><span className='font-semibold text-lg'>Shortlisting : </span>The <strong>top 10</strong> teams will be selected for the onsite contest based on preliminary round performance</li>
            </ul>
          </p>
        </motion.div>

        {/* Fourth card on the left */}
        <motion.div
          ref={cardRefs[1]}
          className="bg-white text-black p-6 rounded-lg shadow-2xl lg:w-1/2 lg:ml-auto"
          initial={{ x: "100px", opacity: 0 }} // Start off-screen to the right
          animate={sectionVisible && visibleCards[1] ? { x: "0px", opacity: 1 } : {}} // Animate when section is visible
          transition={{
            type: "spring",
            damping: 70,
            stiffness: 350,
            duration: 1,
            delay: 1.0, // Delay for second card
          }}
          onViewportEnter={() => setVisibleCards(prev => { const updated = [...prev]; updated[1] = true; return updated; })} // Animate when card comes into view
        >
          <h3 className="text-violet-600 text-2xl mb-4 font-bold">Final Onsite Contest</h3>
          <p className="text-lg font-medium">
            The top 10 teams from the preliminary round will compete in an onsite final on <strong>November 9 and 10</strong> at <strong>AI-Lab</strong>.
          </p>
          <ul className='list-disc ml-4 mt-3'>
            <li className='mb-3'><span className='font-semibold text-lg'>Advanced Challenges : </span>The final contest will feature complex data challenges, pushing teams to apply their skills from previous rounds.</li>
            <li className='mb-3'><span className='font-semibold text-lg'>Presentation : </span>Each will present their solutions to judges, evaluated on creativity, accuracy, and collaboration</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressCards;
