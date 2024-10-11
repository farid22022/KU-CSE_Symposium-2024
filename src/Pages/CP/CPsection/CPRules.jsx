

const CPRules = () => {
  return (
    <div className=" border-violet-500 border-2 rounded-sm text-white py-10 px-6">
      <h2 className="text-3xl sm:text-4xl md:text-2xl  font-bold text-center mb-6">Competitive Programming Rules</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="list-disc space-y-4 pl-6 text-sm sm:text-base md:text-lg">
          <li>
            <strong className="text-yellow-700">Eligibility:</strong> All participants must register for the event before the deadline.
            Participants can compete individually or in teams (if team participation is allowed).
          </li>

          <li>
            <strong className="text-yellow-700">Contest Format:</strong> The contest will consist of a series of algorithmic problems to be
            solved within a fixed time limit. Each problem will have a specified point value based on its difficulty.
          </li>

          <li>
            <strong className="text-yellow-700">Problem Solving:</strong> Participants must write code in one of the allowed programming
            languages (e.g., C++, Java, Python). Solutions must be submitted through the provided online platform.
          </li>

          <li>
            <strong className="text-yellow-700">Scoring:</strong> Points will be awarded based on the number of problems solved and the time
            taken to submit the correct solutions. Penalties may apply for incorrect submissions, affecting the
            overall score.
          </li>

          <li>
            <strong className="text-yellow-700">Code Submission:</strong> Each participant can submit multiple solutions for each problem;
            however, only the last submission will be considered for scoring. Participants must ensure that their code
            is free of plagiarism and follows the ethical guidelines of competitive programming.
          </li>

          <li>
            <strong className="text-yellow-700">Communication:</strong> Participants are prohibited from communicating with anyone outside their
            team (if applicable) during the contest. Any form of collaboration or sharing of solutions is strictly
            forbidden.
          </li>

          <li>
            <strong className="text-yellow-700">Disqualification:</strong> Participants found violating any rules may be disqualified from the
            competition. Judges reserve the right to disqualify any participant based on their judgment.
          </li>

          <li>
            <strong className="text-yellow-700">Judging and Appeals:</strong> The judging process is final, and any disputes must be submitted to
            the judges in writing within a specified time frame after the contest. Judges will review appeals and
            provide feedback.
          </li>

          <li>
            <strong className="text-yellow-700">Code of Conduct:</strong> All participants are expected to adhere to a code of conduct that
            promotes respect, fairness, and integrity throughout the competition. Harassment or disrespectful behavior
            towards fellow participants or judges will not be tolerated.
          </li>

          <li>
            <strong className="text-yellow-700">Prizes:</strong> Prizes will be awarded to the top participants, as specified in the contest
            announcement. Participants must be present at the award ceremony to claim their prizes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CPRules;
