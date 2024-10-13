const OnsiteFinalContestDetails = () => {
    return (
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md mt-10 max-w-xl mx-auto">
        
        <p className="text-lg lg:text-xl text-white text-center mt-3">
          Final Contest Details
        </p>
  
        {/* Contest Details */}
        <div className="mt-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-yellow-300 mb-3 text-center">
            Contest Overview:
          </h3>
          <ol className="list-decimal list-inside text-white space-y-1">
            <li>
              <strong className="text-yellow-700">Onsite Event:</strong> The top 10 teams will compete in an onsite final competition at AI-Lab on November 9 and 10.
            </li>
            <li>
              <strong className="text-yellow-700">Advanced Challenges:</strong> The final contest will present more complex data challenges, requiring teams to utilize their skills from the grooming and preliminary rounds.
            </li>
            <li>
              <strong className="text-yellow-700">Judging Criteria:</strong>
              <ul className=" list-inside mt-1 space-y-1">
                <li><strong className="text-cyan-600">Technical Accuracy:</strong> How well the problem was solved.</li>
                <li><strong className="text-cyan-600">Innovation:</strong> The uniqueness and creativity of the solution.</li>
                <li><strong className="text-cyan-600">Teamwork:</strong> How effectively the team collaborated to solve the problem.</li>
                <li><strong className="text-cyan-600">Presentation:</strong> Introduce team roles, define the problem, outline objectives, methodology, results, data sources.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  };
  
  export default OnsiteFinalContestDetails;
  