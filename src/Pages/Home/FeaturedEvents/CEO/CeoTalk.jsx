import image from "./../../../../../public/Banner/data3.jpg";
import "./ceo.css";

const CeoTalk = () => {
    return (
        <div className="flex flex-col md:flex-row backImageCP p-4 sm:p-6 md:p-20 space-y-5 md:space-y-0 md:space-x-3 justify-around"> {/* Reduced mobile padding */}
            {/* Image Section */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2">
                <img className="w-full max-w-xs sm:max-w-sm p-2" src={image} alt="Competitive Programming" /> {/* Reduced image padding */}
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2">
                <div className="p-4 sm:p-6 md:p-10 bg-slate-400 opacity-80 rounded-xl text-black border-gray-200"> {/* Reduced mobile padding */}
                    <p className="text-sm sm:text-base md:text-lg">Join industry leaders as they share their insights and innovations in technology and data.</p>
                    <div className="flex space-x-2 mt-4 sm:mt-6">
                        <div>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Date:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Location:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Keynote Speakers:</p>
                            <p className="text-yellow-700 text-xs sm:text-sm md:text-base text-start">Networking:</p>
                        </div>
                        <div>
                            <p className=" text-xs sm:text-md md:text-base text-start">November 9, 2024</p>
                            <p className=" text-xs sm:text-md md:text-base text-start">University Auditorium</p>
                            <p className=" text-xs sm:text-md md:text-base text-start">Renowned experts from top tech companies.</p>
                            <p className=" text-xs sm:text-md md:text-base text-start">Connect with professionals and fellow enthusiasts.</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <a
                            href="/ps"
                            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                        >
                            LEARN MORE
                        </a>
                        <a
                            href="/ps"
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

export default CeoTalk;
