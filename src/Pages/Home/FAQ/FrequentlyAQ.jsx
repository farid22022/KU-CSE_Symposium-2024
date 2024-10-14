import  { useState } from 'react';
import "./frequently.css"

const FrequentlyAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the KUCSE Symposium?",
            answer: "The KUCSE Symposium is an annual event where students and professionals come together to share knowledge and experiences in the field of computer science and engineering."
        },
        {
            question: "When will the event take place?",
            answer: "The KUCSE Symposium 2024 will take place from 10-12 November 2024."
        },
        {
            question: "How can I participate?",
            answer: "You can participate by registering on our website and submitting your proposals for presentations or workshops."
        },
        {
            question: "Is there a fee for participation?",
            answer: "There may be a registration fee. Please check the registration page for more details."
        },
        {
            question: "Who can attend the symposium?",
            answer: "The symposium is open to all students, professionals, and anyone interested in computer science and engineering."
        }
    ];

    
    return (
        <div className="faq-container container mx-auto mt-28 p-10">
            <h2 className="text-center text-4xl mx-auto mb-4 text-yellow-700 font-bold">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h4 className='text-xl '>{faq.question}</h4>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && <p className="faq-answer shadow-lg text-left bg-white">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentlyAQ;

