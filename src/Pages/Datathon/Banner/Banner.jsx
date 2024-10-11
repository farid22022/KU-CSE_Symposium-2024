import "./Banner.css"
import map from "./../../../../public/logo/map (1).png"
import date from "./../../../../public/logo/schedule (1).png"

const Banner = () => {
    return (
        <div className="backImage p-5">
            <div className="space-y-5 text-center justify-center pt-14">
                <p className="text-white text-2xl md:text-4xl font-bold text-center">
                 <span className="text-yellow-700">Datathon </span> - Show Your Skills
                </p>
                <p className="text-yellow-700 text-lg">
                Unleash Your Data Skills | Compete | Collaborate | Conquer
                </p>
                <p className="text-sm md:text-base text-white">
                Unleash your data science potential. Join the competition and tackle real-world problems using cutting-edge technology.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={date} className="w-8 h-8 md:w-10 md:h-10" alt="Event Date" />
                    <p className="text-base text-yellow-700"> 9 Nov, 2024</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={map} className="w-8 h-8 md:w-10 md:h-10" alt="Location" />
                    <p className="text-base text-yellow-700">
                        DR. Satyendra Nath Bose Academic Building, Khulna University
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
