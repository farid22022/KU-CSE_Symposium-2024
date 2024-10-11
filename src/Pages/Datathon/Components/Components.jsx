const Components = () => {
    return (
      <div className="text-center p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Why Participate in Synergy - X Datathon 2024?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-yellow-200 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-4xl md:text-5xl mb-4">⚙️</div>
            <h3 className="text-lg md:text-xl text-black font-semibold mb-2">Challenge Yourself</h3>
            <p className="text-sm text-gray-900">Tackle real-world data problems and enhance your skills.</p>
          </div>
  
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-blue-200 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-4xl md:text-5xl mb-4">🔗</div>
            <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Network</h3>
            <p className="text-sm text-gray-900">Meet like-minded individuals and industry experts.</p>
          </div>
  
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-red-200 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-4xl md:text-5xl mb-4">🏆</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Win Prizes</h3>
            <p className="text-sm text-gray-900">Compete for exciting rewards, including cash prizes, internships, and more.</p>
          </div>
  
          <div className="w-full sm:w-1/2 lg:w-1/4 bg-green-200 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-4xl md:text-5xl mb-4">📜</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Get Recognized</h3>
            <p className="text-sm text-gray-900">Stand out and boost your resume by participating in a prestigious competition.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Components;
  