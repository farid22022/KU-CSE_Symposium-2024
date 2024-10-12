const ContactInfo = () => {
    return (
      <div className="p-4 lg:p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
        <h2 className="text-xl lg:text-2xl font-bold text-center text-amber-700 mb-4 lg:mb-6">
          For any inquiries or assistance, feel free to contact
        </h2>
  
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          {/* Program Convenor */}
          <div className="bg-slate-900 rounded-sm p-5 lg:p-5 flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-sky-300">
              Program Convenor
            </h3>
            <p className="text-white">MD. Zahid Hassan Rabbi</p>
            <p className="text-white">
              Email:{" "}
              <a
                href="mailto:istyaque2040@cseku.ac.bd"
                className="text-blue-600 hover:underline lg:inline-block whitespace-nowrap"
              >
                jahidhassanrabbi1786@gmail.com
              </a>
            </p>
            <p className="text-yellow-700">
              Phone:{" "}
              <a href="tel:+8801968291189" className="text-blue-600 hover:underline">
                +8801738861171
              </a>
            </p>
          </div>
  
          {/* Program General Secretary */}
          <div className="bg-slate-900 rounded-sm p-5 lg:p-5 flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-sky-300">
              Program General Secretary
            </h3>
            <p className="text-white">Md Tasbi Hassan</p>
            <p className="text-white">
              Email:{" "}
              <span className="text-blue-600 hover:underline whitespace-nowrap">
                tasbi2116@cseku.ac.bd
              </span>
            </p>
            <p className="text-yellow-700">
              Phone:{" "}
              <a href="tel:+8801827202781" className="text-blue-600 hover:underline">
                +8801644539154
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  