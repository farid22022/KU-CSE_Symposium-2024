import { useState } from 'react';

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
        <div className="faq-container container mx-auto mt-28 p-10 shadow-md">
            <h2 className="text-center text-4xl mx-auto mb-4 font-bold">Frequently Asked <span className='text-yellow-700'>Questions</span></h2>
            <div className='w-full p-2 lg:w-1/2 space-y-2 mx-auto mt-8'>
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow shadow-md">
                        <input type="checkbox" checked={activeIndex === index} onChange={() => toggleFAQ(index)} />
                        <div className="collapse-title text-xl font-semibold">
                            {faq.question}
                        </div>
                        <div className="collapse-content bg-white p-2 px-4">
                            <p className="text-gray-500 text-left">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentlyAQ;
