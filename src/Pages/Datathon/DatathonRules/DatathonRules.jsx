const DatathonRules = () => {
    return (
      <div className="border-violet-500 border-2 rounded-sm text-white py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:mt-8 md:mt-5 sm:mt-2">
        <h2 className="text-3xl sm:text-4xl md:text-2xl font-bold text-center text-yellow-700 mb-6">
          Rules and Guidelines
        </h2>
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-md lg:p-8">
          <ul className="list-disc space-y-4 pl-6 text-sm sm:text-base md:text-lg text-start">
            <li>
              <strong className="text-yellow-700">Eligibility:</strong> Open to students from any university in Bangladesh.
            </li>
            <li>
              <strong className="text-yellow-700">Team Composition:</strong> Teams must have 3 members. Members can be from the same or different universities.
            </li>
            <li>
              <strong className="text-yellow-700">Grooming Sessions:</strong> Teams must register to qualify for the preliminary round, but attending the five grooming sessions is optional.
            </li>
            <li>
              <strong className="text-yellow-700">Commitment:</strong> Participants are expected to remain committed throughout the competition. The registration fee is non-refundable.
            </li>
            <li>
              <strong className="text-yellow-700">Submission:</strong> Teams will submit their solutions in both the preliminary and final rounds. Judging will be based on technical accuracy, creativity, and teamwork.
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default DatathonRules;
  