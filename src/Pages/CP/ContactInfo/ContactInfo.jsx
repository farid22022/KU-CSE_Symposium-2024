const ContactInfo = () => {
    return (
      <div className="p-4 lg:p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
        <h2 className="text-xl lg:text-2xl font-bold text-center text-amber-700 mb-4 lg:mb-6">
          Contact Information
        </h2>
  
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          {/* Program Convenor */}
          <div className="bg-slate-900 rounded-sm p-4 lg:p-5 flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-sky-300">
              Program Convenor
            </h3>
            <p className="text-white">Rabiul Islam Rabi </p>
            <p className="text-white">
              Email:{" "}
              <a
                href="mailto:rabiul2034@cseku.ac.bd"
                className="text-blue-600 hover:underline"
              >
                rabiul2034@cseku.ac.bd
              </a>
            </p>
            <p className="text-yellow-700">
              Phone:{" "}
              <a href="tel:+8801608-077170" className="text-blue-600 hover:underline">
                +8801608-077170
              </a>
            </p>
          </div>
  
          {/* Program General Secretary */}
          <div className="bg-slate-900 rounded-sm p-4 lg:p-5 flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-sky-300">
              Program General Secretary
            </h3>
            <p className="text-white">Mahmudul Hasan</p>
            <p className="text-white">
              Email:{" "}
              <span className="text-gray-600 italic">Not provided</span>
            </p>
            <p className="text-yellow-700">
              Phone:{" "}
              <a href="tel:+8801827202781" className="text-blue-600 hover:underline">
                +8801827202781
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  