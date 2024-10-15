import "./Banner.css"
import map from "./../../../../public/logo/google-maps.png";
import date from "./../../../../public/logo/calendar-black.png";
import details from "./../../../../public/File/SynergyX_2024_Datathon_Competition.pdf";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative  bg-violet-400 pt-20 px-3 pb-16 lg:pt-32 h-fit mb-10 rounded-b-[5rem] text-center">
            <div className="text-center space-y-5 md:container mx-auto">
                <h1 className="font-[900] text-5xl text-center">
                    Synergy - <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">X</span> Datathon 2024
                </h1>

                <p className="font-semibold text-base text-opacity-80 text-center">
                    Unleash Your Data Skills | Compete | Collaborate | Conquer
                </p>

                <p className="font-normal text-opacity-50 w-[95%] sm:w-3/4 mx-auto text-center">
                    Unleash your data science potential. Join the competition and tackle
                    real-world problems using cutting-edge technology.
                </p>

                <div className="flex items-center justify-center gap-3">
                    <img src={date} alt="Calendar" className="w-6 h-6" />
                    <h3 className="font-bold text-lg">8 - 9 NOV, 2024</h3>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <img
                        src={map}
                        alt="Location"
                        className="w-8 h-8 lg:w-6 lg:h-6"
                    />
                    <a
                            href="https://www.google.com/maps/place/Satyendra+Nath+Bose+Academic+Building/@22.802616,89.5321499,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff8549472ab2c7:0x581022fe2caec6f6!8m2!3d22.8026111!4d89.5347248!16s%2Fg%2F11ddwhpz14?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            className="font-bold text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"
                        >
                            DR. Satyendra Nath Bose Academic Building, Khulna University
                        </a>
                </div>

                <div>
                    <div className="flex gap-4 w-fit mx-auto">
                        <a
                            className="bg-white text-black font-bold inline-block px-4 py-2 rounded-xl"
                            href={details} // Update to use the imported details file
                            download // This attribute will trigger the download
                        >
                            Rules
                        </a>

                        <a
                        className="bg-gradient-to-r from-orange-500 to-red-500 font-semibold text-white inline-block px-4 py-2 rounded-xl"
                        href="#"
                        >
                        Register Now!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
