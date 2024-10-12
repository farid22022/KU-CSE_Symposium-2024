import React from 'react';

const ContestDetails = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Innovation Idea & Research Poster Contest
      </h1>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">
        Focus Areas
      </h2>
      <ul className="list-disc pl-5 mt-2 text-gray-600">
        <li>Innovative Solutions for Industrial or Societal Challenges</li>
      </ul>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">
        Thesis Poster Submission
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
        Share your research or thesis work as a poster presentation. Whether it’s a technological breakthrough, sustainability solution, or healthcare innovation, we welcome thesis posters that offer creative and research-driven solutions to modern problems.
      </p>
    </div>
  );
};

export default ContestDetails;
