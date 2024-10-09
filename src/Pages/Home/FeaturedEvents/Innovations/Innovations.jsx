// import Button from "../../../../Shared/Buttons/Button";
// import image from "./../../../../../public/Banner/data3.jpg"
// import "./innovation.css"
// const Innovations = () => {
//     return (
//         <div className="flex backImageINN p-20 space-x-3 justify-around">

            
            
//             <div>
                
//                 <div className="p-10 bg-slate-400 opacity-65 rounded-xl text-black border-gray-200">
//                     <p>Display cutting-edge tech projects and innovations from emerging talents.</p>
//                     <p><span className="text-yellow-700 text-xl">Date:</span> November 9, 2024</p>
//                     <p><span className="text-yellow-700 text-xl">ExhibitiFeatured Projects:</span> AI, Robotics, and Next-Gen Technologies</p>
//                     <p><span className="text-yellow-700 text-xl"> Networking:</span> Meet with project developers and industry experts.</p>
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

// export default Innovations;


import Button from "../../../../Shared/Buttons/Button";
import image from "./../../../../../public/Banner/data3.jpg";
import "./innovation.css";

const Innovations = () => {
    return (
        <div className="flex flex-col md:flex-row backImageINN p-5 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            
            {/* Text Section */}
            <div>
                <div className="p-5 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm md:text-base">Display cutting-edge tech projects and innovations from emerging talents.</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Date:</span> November 9, 2024</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Featured Projects:</span> AI, Robotics, and Next-Gen Technologies</p>
                    <p className="text-sm md:text-base"><span className="text-yellow-700 text-lg md:text-xl">Networking:</span> Meet with project developers and industry experts.</p>
                    <div className="mt-5">
                        <Button />
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-end">
                <img className="w-full max-w-sm p-5" src={image} alt="Innovations" />
            </div>
        </div>
    );
};

export default Innovations;
