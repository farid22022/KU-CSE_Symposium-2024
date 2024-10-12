const ExternalButton = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 pb-16">
        {/* Pre-selection Result Button */}
        <div className="text-center bg-slate-500  p-5 rounded-md">
          <div className="grid mb-2">
                <h2 className="text-lg font-semibold text-gray-800 "> Pre-Selection</h2>
                <h2 className="text-lg font-semibold text-gray-800 ">Result Announcement</h2>
          </div>
          <a
            href="#"
            className="inline-block bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300"
          >
            2 November
          </a>
        </div>
  
        {/* Final Submission Button */}
        <div className="text-center bg-slate-500 p-5 rounded-md">
            <div className="grid mb-2">
                    <h2 className="text-lg font-semibold text-gray-800 "> Final Poster Submission</h2>
                    <h2 className="text-lg font-semibold text-gray-800 "> and Registration</h2>
            </div>
          <a
            href="#"
            className="inline-block bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300"
          >
            2 to 7 November
          </a>
        </div>
      </div>
    );
  };
  
  export default ExternalButton;
  