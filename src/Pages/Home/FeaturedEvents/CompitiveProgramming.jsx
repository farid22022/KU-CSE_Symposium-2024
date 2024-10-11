

// import Button from "../../../Shared/Buttons/Button";
// import image from "./../../../../public/Banner/data3.jpg";
// import "./Compitive.css";

// const CompitiveProgramming = () => {
//     return (
//         <div className="flex flex-col md:flex-row backImageCP p-5 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            
//             {/* Text Section */}
//             <div>
//                 <div className="p-5 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
//                     <p className="text-base md:text-base">Test your coding skills by solving complex problems in a timed competition.</p>
//                     <div className="flex space-x-2">
//                         <div>
//                             <p className="text-sm md:text-base text-start">Date:</p>
//                             <p className="text-sm md:text-base text-start">Prizes:</p>
//                             <p className="text-sm md:text-base text-start">Location:</p>
//                             <p className="text-sm md:text-base text-start">Languages:</p>
//                         </div>
//                         <div>
//                             <p className="text-yellow-700  text-start">November 9, 2024</p>
//                             <p className="text-yellow-700  text-start">1st Prize: $500, 2nd Prize: $300</p>
//                             <p className="text-yellow-700  text-start">Computer Lab, Tech Block</p>
//                             <p className="text-yellow-700  text-start">C, C++, Java, Python</p>
//                         </div>
//                     </div>
//                     <div className="mt-5">
//                         <Button />
//                     </div>
//                 </div>
//             </div>
            
//             {/* Image Section */}
//             <div className="flex justify-center md:justify-end">
//                 <img className="w-full max-w-sm p-5" src={image} alt="Competitive Programming" />
//             </div>
//         </div>
//     );
// };

// export default CompitiveProgramming;

import image from "./../../../../public/Banner/data3.jpg";
import "./Compitive.css";

const CompitiveProgramming = () => {
    return (
        <div className="flex flex-col md:flex-row backImageCP p-5 sm:p-8 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            {/* Image Section */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
                <img className="w-full max-w-xs sm:max-w-sm p-5" src={image} alt="Competitive Programming" />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <div className="p-5 sm:p-8 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm sm:text-base md:text-lg">Test your coding skills by solving complex problems in a timed competition.</p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Prizes:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Location:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Languages:</p>
                        </div>
                        <div>
                            <p className=" text-xs sm:text-sm md:text-base text-start">November 9, 2024</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">1st Prize: $500, 2nd Prize: $300</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">Computer Lab, Tech Block</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">C, C++, Java, Python</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"> {/* Flex container for responsiveness */}
                        <a
                            href="/cp"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            LEARN MORE
                        </a>
                        <a
                            href="/cp"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            REGISTER !
                        </a>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default CompitiveProgramming;

