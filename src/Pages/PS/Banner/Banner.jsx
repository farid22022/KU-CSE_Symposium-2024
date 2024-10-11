import "./Banner.css";
import map from "./../../../../public/logo/placeholder.png";
import date from "./../../../../public/logo/calendar.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="backImage">
            <div className="space-y-5 text-center justify-center p-10 md:p-20"> {/* Adjusted padding for responsiveness */}
                <p className="text-white text-2xl md:text-4xl font-bold text-center">
                    <span className="text-yellow-700">Symposium Talk </span>- Insights and Innovations
                </p>
                <p className="text-yellow-700 text-xl ">
                    Where Industry Leaders Share their Vision
                </p>
                <p className="text-lg  text-white">
                    professionals looking to stay ahead of industry changes.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={date} className="w-8 h-8 md:w-10 md:h-10" alt="Event Date" />
                    <p className="text-base text-white"> 9 NOV, 2024</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                    <img src={map} className="w-8 h-8 md:w-10 md:h-10" alt="Location" />
                    <Link to="https://www.google.com/maps/place/Satyendra+Nath+Bose+Academic+Building/@22.802616,89.5321499,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff8549472ab2c7:0x581022fe2caec6f6!8m2!3d22.8026111!4d89.5347248!16s%2Fg%2F11ddwhpz14?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D" className="text-base text-white">
                        DR. Satyendra Nath Bose Academic Building, Khulna University
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
