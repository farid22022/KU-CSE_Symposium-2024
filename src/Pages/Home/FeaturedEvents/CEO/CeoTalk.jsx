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
        <div className="flex flex-col md:flex-row backImageCEO p-5 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            
            {/* Image Section */}
            <div className="flex justify-center md:justify-end">
                <img className="w-full max-w-sm p-5" src={image} alt="CEO Talk" />
            </div>
            
            {/* Text Section */}
            <div>
                <div className="p-5 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm md:text-base">Join industry leaders as they share their insights and innovations in technology and data.</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Date:</span> November 9, 2024</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Location:</span> University Auditorium</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Keynote Speakers:</span> Renowned experts from top tech companies.</p>
                    <div className="mt-5">
                        <Button></Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CeoTalk;
