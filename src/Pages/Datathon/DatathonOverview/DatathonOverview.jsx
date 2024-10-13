const DatathonOverview = () => {
    return (
      <div className=" p-8 space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
          Datathon Overview
        </h2>
        <p className="text-lg lg:text-2xl font-bold text-white text-center">
          The competition will unfold in three key stages:
        </p>
  
        {/* Card container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 - Grooming Sessions */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300">
              1. Grooming Sessions
            </h3>
            <p className="text-white text-lg lg:text-xl">
              Teams will participate in 5 interactive grooming sessions, covering
              essential topics in data science, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-white">
              <li>Data Cleaning</li>
              <li>Data Engineering</li>
              <li>Model Training</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
            </ul>
          </div>
  
          {/* Card 2 - Preliminary Round */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300">
              2. Preliminary Round
            </h3>
            <p className="text-white text-lg lg:text-xl">
              After the grooming sessions, teams will engage in a virtual data
              challenge to test their skills and qualify for the final.
            </p>
          </div>
  
          {/* Card 3 - Final Onsite Contest */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300">
              3. Final Onsite Contest
            </h3>
            <p className="text-white text-lg lg:text-xl">
              The top 10 teams from the preliminary round will compete in an
              onsite final, taking place over two days on <strong>November 9 and 10</strong> at <strong>AI-Lab</strong>.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DatathonOverview;
  