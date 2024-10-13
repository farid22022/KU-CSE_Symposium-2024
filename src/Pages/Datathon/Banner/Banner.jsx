import "./Banner.css"
import map from "./../../../../public/logo/map (1).png"
import date from "./../../../../public/logo/schedule (1).png"
// import map from "./../../../../public/logo/placeholder (1).png";
// import date from "./../../../../public/logo/calendar.png";
import clock from "./../../../../public/logo/clock.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="backImage p-5">
            <div className="space-y-5 text-center justify-center pt-14">
                <p className="text-white text-2xl md:text-4xl font-bold text-center">
                 <span className="text-yellow-700">Datathon </span> - Show Your Skills
                </p>
                {/* <p className="text-yellow-700 text-lg">
                Unleash Your Data Skills | Compete | Collaborate | Conquer
                </p> */}
                <p className="text-white text-sm md:text-base">
                    organized by <span className="text-yellow-700 font-bold">Khulna University</span> and <span className="text-yellow-700 font-bold">CLUSTER</span>.
                </p>
                
                {/* <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={date} className="w-8 h-8 md:w-10 md:h-10" alt="Event Date" />
                    <p className="text-base text-yellow-700"> 9 Nov, 2024</p>
                </div> */}
                {/* <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex items-center space-x-2">
                        <img src={date} className="w-8 h-8 md:w-10 md:h-10" alt="Event Date" />
                        <p className="text-base text-white">Event Date: <span className="text-yellow-700">9 - 10, November 2024</span></p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <p className="text-base text-white">
                            <img src={clock} className="inline-flex w-8 h-8 md:w-10 md:h-10" alt="Clock" /> 
                            PRE-Registration Deadline: <span className="text-yellow-700">30 October, 2024</span>
                        </p>
                    </div>

                    <div>
                        <Link to="https://forms.gle/HHDTny838mYE15xh7" className="text-base text-yellow-700">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div> */}

                {/* <div className="text-white">
                    <span className="text-yellow-700">Registration Fees:</span>  1500 BDT per group (Max. 3 students)
                </div> */}
                
                {/* <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={map} className="w-8 h-8 md:w-10 md:h-10" alt="Location" />
                    <p className="text-base text-yellow-700">
                        DR. Satyendra Nath Bose Academic Building, Khulna University
                    </p>
                </div> */}

                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={date} className="w-6 h-6 md:w-8 md:h-8" alt="Event Date" /> {/* Adjusted size */}
                    <p className="text-base text-white">9-10 NOV, 2024</p>
                </div>
                <div className="text-white">
                    <span className="text-yellow-700">Registration Fees:</span>  1500 BDT per group (Max. 3 students)
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 pb-5">
                    <img src={map} className="w-6 h-6 md:w-8 md:h-8" alt="Location" /> {/* Adjusted size */}
                    <p className="text-base text-white">
                        DR. Satyendra Nath Bose Academic Building, Khulna University
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
