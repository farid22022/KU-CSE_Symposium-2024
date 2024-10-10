// import Button from "../../../Shared/Buttons/Button";
// import image from "./../../../../public/Banner/data3.jpg"
// import "./Data.css"
// const Datathon = () => {
//     return (
//         <div className="flex backImageData p-20 space-x-3 justify-around">
//             <div className="text-end justify-end">
//                 <img className="p-5 " src={image} />
//             </div>
//             <div>
                
//                 <div className="p-10 bg-slate-400 opacity-65 rounded-xl text-black border-gray-200">
//                     <p>Test your coding skills by solving complex problems in a timed competition.</p>
//                     <p><span className="text-yellow-700 text-xl">Date:</span> November 9, 2024</p>
//                     <p><span className="text-yellow-700 text-xl">Prizes:</span> 1st Prize: $500, 2nd Prize: $300</p>
//                     <p><span className="text-yellow-700 text-xl">location:</span> Computer Lab, Tech Block</p>
//                     <p><span className="text-yellow-700 text-xl">Languages:</span>  C, C++, Java, Python</p>
//                     <div>
//                         <Button></Button>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default Datathon;

import Button from "../../../Shared/Buttons/Button";
import image from "./../../../../public/Banner/data3.jpg";
import "./Data.css";

const Datathon = () => {
    return (
        <div className="flex flex-col md:flex-row backImageCP p-5 sm:p-8 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <div className="p-5 sm:p-8 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm sm:text-base md:text-lg">Collaborate with data enthusiasts to solve real-world challenges using big data and machine learning techniques.</p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Prizes:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Registration Deadline:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Rules: </p>
                        </div>
                        <div>
                            <p className=" text-xs sm:text-sm md:text-base text-start">November 9, 2024</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">1st Prize: $500, 2nd Prize: $300</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">October 25, 2024</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start"> Teams of up to 3 must use provided datasets.</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button />
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2">
                <img className="w-full max-w-xs sm:max-w-sm p-5" src={image} alt="Competitive Programming" />
            </div>
            
        </div>
    );
};

export default Datathon;
