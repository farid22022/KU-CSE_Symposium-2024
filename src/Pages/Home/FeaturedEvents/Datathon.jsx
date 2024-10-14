


import image from "./../../../../public/Banner/datathon.png";
import "./Data.css";

const Datathon = () => {
    return (
        <div className="container mx-auto mb-8">
            <div className="md:w-[87%] mt-14 mb-8 mx-auto p-2 flex flex-col lg:flex-row justify-around items-center gap-2 sm:gap-4 shadow-lg rounded-lg">
                {/* Image Section */}
                <div className="lg:w-1/2 xl:w-[45%] flex rounded-lg">
                    <img className="w-[95%] lg:w-full rounded-xl mx-auto" animate={{ scale: 1.1 }} src={image} alt="Competitive Programming" />
                </div>
                {/* Text Section */}
                <div className="lg:w-1/2 xl:w-[45%] mb-1 sm:mb-3 lg:mb-0 text-left bg-white rounded-lg">
                    <div className="p-5 sm:p-8 rounded-xl text-left lg:text-right text-black">
                        <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl mb-5">Datathon</h2>
                        <p className="text-gray-600 mb-4">
                            Collaborate with data enthusiasts to solve real-world challenges using big data and machine learning techniques.
                        </p>
                        <div className="flex flex-wrap items-center lg:justify-end mr-0 gap-4"> {/* Flex container for responsiveness */}
                            <a
                                href="/datathon"
                                className="inline-block border-2 border-gray-500 text-black font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-none transition text-center"
                            >
                                Explore More
                            </a>
                            <a
                                href="/datathon"
                                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm py-1 md:py-2 p-2 md:px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition text-center"
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

export default Datathon;
