// import Button from "../../../Shared/Buttons/Button";
// import image from "./../../../../public/Banner/data3.jpg"
// import "./Compitive.css"
// const CompitiveProgramming = () => {
//     return (
//         <div className="flex backImageCP p-20 space-x-3 justify-around">
            
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
//             <div className="text-end justify-end">
//                 <img className="p-5 " src={image} />
//             </div>
//         </div>
//     );
// };

// export default CompitiveProgramming;

import Button from "../../../Shared/Buttons/Button";
import image from "./../../../../public/Banner/data3.jpg";
import "./Compitive.css";

const CompitiveProgramming = () => {
    return (
        <div className="flex flex-col md:flex-row backImageCP p-5 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            
            {/* Text Section */}
            <div>
                <div className="p-5 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm md:text-base">Test your coding skills by solving complex problems in a timed competition.</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Date:</span> November 9, 2024</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Prizes:</span> 1st Prize: $500, 2nd Prize: $300</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Location:</span> Computer Lab, Tech Block</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Languages:</span> C, C++, Java, Python</p>
                    <div className="mt-5">
                        <Button />
                    </div>
                </div>
            </div>
            
            {/* Image Section */}
            <div className="flex justify-center md:justify-end">
                <img className="w-full max-w-sm p-5" src={image} alt="Competitive Programming" />
            </div>
        </div>
    );
};

export default CompitiveProgramming;
