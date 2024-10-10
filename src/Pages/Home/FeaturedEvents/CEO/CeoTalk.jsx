// import Button from "../../../../Shared/Buttons/Button";
// import image from "./../../../../../public/Banner/data3.jpg"
// import "./ceo.css"
// const CeoTalk = () => {
//     return (
//         <div className="flex backImageCEO p-20 space-x-3 justify-around">

//             <div className="text-end justify-end">
//                 <img className="p-5 " src={image} />
//             </div>
            
//             <div>
                
//                 <div className="p-10 bg-slate-400 opacity-65 rounded-xl text-black border-gray-200">
//                     <p>Join industry leaders as they share their insights and innovations in technology and data.</p>
//                     <p><span className="text-yellow-700 text-xl">Date:</span> November 9, 2024</p>
//                     <p><span className="text-yellow-700 text-xl">location:</span>University Auditorium</p>
//                     <p><span className="text-yellow-700 text-xl">Keynote Speakers:</span>  Renowned experts from top tech companies.</p>
//                     <div>
//                         <Button></Button>
//                     </div>
//                 </div>
                
//             </div>

            
            
//         </div>
//     );
// };

// export default CeoTalk;
import Button from "../../../../Shared/Buttons/Button";
import image from "./../../../../../public/Banner/data3.jpg";
import "./ceo.css";

const CeoTalk = () => {
    return (
        <div className="flex flex-col md:flex-row backImageCP p-5 sm:p-8 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            {/* Image Section */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
                <img className="w-full max-w-xs sm:max-w-sm p-5" src={image} alt="Competitive Programming" />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <div className="p-5 sm:p-8 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm sm:text-base md:text-lg">Join industry leaders as they share their insights and innovations in technology and data.</p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Location:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Keynote Speakers:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Networking:</p>
                        </div>
                        <div>
                            <p className=" text-xs sm:text-sm md:text-base text-start">November 9, 2024</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">University Auditorium</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">Renowned experts from top tech companies.</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">Connect with professionals and fellow enthusiasts.</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button />
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default CeoTalk;
