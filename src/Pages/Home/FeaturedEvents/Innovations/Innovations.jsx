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



import image from "./../../../../../public/Banner/data3.jpg";
import "./innovation.css";

const Innovations = () => {
    return (
        <div className="flex flex-col md:flex-row backImageCP p-5 sm:p-8 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around">
            
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <div className="p-5 sm:p-8 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200">
                    <p className="text-sm sm:text-base md:text-lg">Test your coding skills by solving complex problems in a timed competition.</p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            {/* <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Prize:</p> */}
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Location:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Featured Projects:</p>
                        </div>
                        <div>
                            <p className=" text-xs sm:text-sm md:text-base text-start">November 9, 2024</p>
                            {/* <p className=" text-xs sm:text-sm md:text-base text-start">Champion: 5000 BDT + Certificate 2nd Prize: $300</p> */}
                            <p className=" text-xs sm:text-sm md:text-base text-start">Exhibition Hall, Innovation Center</p>
                            <p className=" text-xs sm:text-sm md:text-base text-start">AI, Robotics, and Next-Gen Technologies</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"> {/* Flex container for responsiveness */}
                        <a
                            href="/innovations"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            LEARN MORE
                        </a>
                        <a
                            href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
                            target="_blank" // Opens link in a new tab
                            rel="noopener noreferrer"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            REGISTER !
                        </a>
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

export default Innovations;
