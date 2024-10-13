const PreliminaryRoundDetails = () => {
    return (
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md mt-10 max-w-xl mx-auto mt-10">
        
        
          <p className="text-lg lg:text-xl text-white text-center mt-3">
            Preliminary Contest Details
          </p>
  
          {/* Contest Details */}
          <div className="mt-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300 mb-3 text-center">
              Contest Overview:
            </h3>
            <ol className=" list-inside text-white space-y-1">
              <li>
                <strong className="text-yellow-700">Challenge Format:</strong> After the grooming sessions, teams
                will participate in a virtual preliminary data challenge, serving as
                the first competitive stage.
              </li>
              <li>
                <strong className="text-yellow-700">Evaluation Criteria:</strong> Teams will be judged based on
                technical accuracy, problem-solving creativity, and collaboration.
              </li>
              <li>
                <strong className="text-yellow-700">Shortlisting:</strong> The 10 best teams will be shortlisted
                for the onsite contest based on their performance in the preliminary
                round.
              </li>
            </ol>
          </div>
      </div>
    );
  };
  
  export default PreliminaryRoundDetails;
  