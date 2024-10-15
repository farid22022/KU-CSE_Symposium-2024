import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a Datathon?",
      answer:
        "A Datathon is a data-centric competition where participants are tasked with analyzing datasets, building predictive models, and deriving insights to solve real-world problems within a limited time frame.",
    },
    {
      question: "Who can participate in the Datathon?",
      answer:
        "Anyone from a university with an interest in data science, machine learning, and analytics can participate. We welcome students at all skill levels, allowing them to compete individually or in teams of up to three members. Teams must be formed before the grooming sessions begin, and each team will consist of three members. Additionally, team members may be from the same or different universities",
    },
    {
      question: "How will the data be provided?",
      answer:
        "A specific dataset will be provided at the start of the competition, and participants will have access to download the data files from the competition portal. External datasets are allowed only if specified in the problem statement. Further changes will be communicated during the competition if necessary.",
    },
    {
      question: "What tools or software can I use?",
      answer:
        " Participants may use Python, TensorFlow, PyTorch, Scikit-learn, etc. Paid tools are not permitted unless provided by the organizers.",
    },
    {
      question: "How will the submissions be evaluated?",
      answer:
        "Submissions will be evaluated based on several criteria, including model performance (assessed through metrics such as accuracy, AUC, and RMSE), innovation (the use of creative and novel approaches to solve the problem), scalability (the solution's ability to handle larger datasets or more complex scenarios), code quality (readability and documentation), and real-world applicability (demonstrating practical applications for the solution). The judging panel will consist of data experts and industry professionals."
    },
    {
      question: "How do I register my team for the Datathon?",
      answer: "To participate, teams must consist of three members. Once your team is formed, complete the online registration form and pay the team registration fee. Simply click the Register button and fill out the necessary details.",
    },
    {
      question: "What happens if I need help during the Datathon?",
      answer:
        "We will have support staff available throughout the competition to assist with any technical issues or questions related to the dataset. You can reach out to them.",
    },
  ];

  return (
    <section className="container mx-auto my-5 md:my-8 lg:my-10 shadow-md p-4 md:p-6 lg:p-8">
      {/* Title */}
      <div className="text-center mb-10 lg:mb-16">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked <span className="text-violet-400">Questions</span>
        </h1>
      </div>

      {/* FAQ Content */}
      <div className="flex justify-center items-center mx-auto">
        {/* Questions */}
        <div className="w-full p-2 lg:w-1/2 space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow shadow-md">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content bg-white p-2 px-4">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
