import "./Banner.css";
import map from "./../../../../public/logo/placeholder (1).png";
import date from "./../../../../public/logo/calendar.png";
import clock from "./../../../../public/logo/clock.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="backImage">
            <div className="space-y-5 text-center justify-center p-6 md:p-10 lg:p-20">
                <p className="text-white text-2xl md:text-4xl font-bold text-center">
                    <span className="text-yellow-700 font-bold">Innovation showcasing</span> - Show Your Innovative Ideas
                </p>
                <p className="text-white text-sm md:text-base">
                    organized by <span className="text-yellow-700 font-bold">Khulna University</span> and <span className="text-yellow-700 font-bold">CLUSTER</span>.
                </p>
                {/* <p className="text-sm md:text-base text-white">
                    Join us for an exclusive CEO talk where leaders from top tech companies discuss emerging trends in data, AI, and innovation. This is a must-attend event for showcasing groundbreaking solutions that address today's challenges in healthcare, education, energy, and more—all through creative poster presentations! 🙌✨
                </p> */}

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex items-center space-x-2">
                        <img src={date} className="w-8 h-8 md:w-10 md:h-10" alt="Event Date" />
                        <p className="text-base text-white">Event Date: <span className="text-yellow-700">9 November 2024</span></p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <p className="text-base text-white">
                            <img src={clock} className="inline-flex w-8 h-8 md:w-10 md:h-10" alt="Clock" /> 
                            PRE-Registration Deadline: <span className="text-yellow-700">30 October, 2024</span>
                        </p>
                    </div>

                    {/* <div>
                        <Link to="https://forms.gle/HHDTny838mYE15xh7" className="text-base text-yellow-700">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                                Register Now
                            </button>
                        </Link>
                    </div> */}
                </div>

                <div className="text-white">
                    <span className="text-yellow-700">Registration Fees:</span>  600 BDT per group (Max. 2 students)
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={map} className="w-8 h-8 md:w-10 md:h-10" alt="Location" />
                    <Link to="https://www.google.com/maps/place/Khulna+University/@22.8022088,89.5313482,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff85490c50d28f:0xadae6f7b93b7069a!8m2!3d22.8022039!4d89.5339231!16zL20vMDZsenhy?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D" className="text-base text-yellow-700">
                        Khulna University
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
