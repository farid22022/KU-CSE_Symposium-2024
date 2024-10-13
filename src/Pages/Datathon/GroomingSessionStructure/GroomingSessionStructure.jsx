const GroomingSessionStructure = () => {
    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md mt-10 max-w-xl mx-auto ">
        {/* <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
          Step 1: Team Formation and Grooming Sessions
        </h2> */}
        <p className="text-lg lg:text-xl text-white text-center mt-3">
          Team Formation
        </p>
  
        {/* Team Formation Details */}
        <div className="mt-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300 mb-3 text-center">
            Team Registration:
          </h3>
          <ol className=" list-inside text-white space-y-1">
            <li>
              <strong className="text-yellow-700">Team Registration:</strong> Teams must be formed before the grooming sessions begin. Each team will consist of 3 members. Members may be from the same or different universities.
            </li>
            <li>
              <strong className="text-yellow-700">Registration Fee:</strong> The registration fee for each team is 1,500 BDT, covering both the grooming sessions and competition stages.
            </li>
          </ol>
        </div>
  
        {/* Grooming Session Structure */}
        <div className="mt-6">
          <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300 mb-3 text-center">
            Grooming Session Structure:
          </h3>
          <p className="text-lg lg:text-xl text-white text-center mb-2">
            <span className="text-yellow-700">Total Sessions:</span> 5 interactive grooming sessions designed to equip teams with the skills needed for the Datathon.
          </p>
          <ul className="list-disc list-inside text-white space-y-1">
            <li className="text-yellow-700">Data Cleaning</li>
            <li className="text-yellow-700">Data Engineering</li>
            <li className="text-yellow-700">Model Training</li>
            <li className="text-yellow-700">Natural Language Processing (NLP)</li>
            <li className="text-yellow-700">Computer Vision</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default GroomingSessionStructure;
  