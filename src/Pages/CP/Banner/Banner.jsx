import "./Banner.css";
import map from "./../../../../public/logo/placeholder.png";
import date from "./../../../../public/logo/calendar.png";

const Banner = () => {
    return (
        <div className="backImage p-4 md:p-6 lg:p-8"> {/* Adjusted padding for responsiveness */}
            <div className="space-y-4 text-center justify-center pt-10 md:pt-14">
                <p className="text-white text-3xl md:text-3xl lg:text-4xl font-bold text-center">
                    <span className="text-yellow-700">programming Contest</span> - Show Your Coding Skills 
                </p>
                <p className="text-yellow-700 text-md md:text-base">
                    Challenge Yourself | Compete | Collaborate | Conquer
                </p>
                {/* <p className="text-lg md:text-base text-white">
                    Showcase your programming skills and solve real-world problems. Join the contest for a chance to win exciting prizes and recognition!
                </p> */}
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={date} className="w-6 h-6 md:w-8 md:h-8" alt="Event Date" /> {/* Adjusted size */}
                    <p className="text-base text-white">10 NOV, 2024</p>
                </div>
                <div className="text-white">
                    <span className="text-yellow-700">Registration Fees:</span>  2500 BDT per group (Max. 3 students)
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
