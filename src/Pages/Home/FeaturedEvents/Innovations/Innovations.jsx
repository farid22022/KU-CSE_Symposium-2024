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



import image from "./../../../../../public/Banner/innovation-showcasing.png";
import "./innovation.css";

const Innovations = () => {
    return (
        <div className="container mx-auto">
            <div className="md:w-[87%] mt-14 mb-8 mx-auto p-2 flex flex-col lg:flex-row justify-around items-center gap-2 sm:gap-4 shadow-lg rounded-lg">
                {/* Image Section */}
                <div className="lg:w-1/2 xl:w-[45%] flex">
                    <img className="w-[95%] lg:w-full rounded-xl mx-auto" animate={{ scale: 1.1 }} src={image} alt="Competitive Programming" />
                </div>
                {/* Text Section */}
                <div className="lg:w-1/2 xl:w-[45%] mb-1 sm:mb-3 lg:mb-0 bg-white rounded-lg">
                    <div className="p-5 sm:p-8 text-left lg:text-right rounded-xl text-black">
                        <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-5">Innovation Showcasing</h2>
                        <p className="text-gray-600 mb-4">
                            Display cutting-edge tech projects and innovations from emerging talents.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 lg:justify-end"> {/* Flex container for responsiveness */}
                            <a
                                href="/innovations"
                                className="inline-block border-2 border-gray-500 text-black font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md hover:bg-amber-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-none transition text-center"
                            >
                                Explore More
                            </a>
                            <a
                                href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
                                target="_blank" // Opens link in a new tab
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md hover:bg-amber-700 transition text-center"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Innovations;
