import "./Banner.css";
import map from "./../../../../public/logo/google-maps.png";
import date from "./../../../../public/logo/calendar-symposium.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="relative w-full bg-sky-400 mb-10 rounded-b-[5rem] text-center">
            <div>
                <div className="md:container mx-auto pt-20 px-3 pb-5 lg:pt-32 h-fit text center space-y-5">
                    <h1 className="font-[900] text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                        Symposium Talk - Insights and Innovations
                    </h1>
                    <p className="font-medium text-base text-opacity-80 text-center">
                        Where Industry Leaders Share their Vision
                    </p>
                    <p className="font-normal text-opacity-50 w-[95%] sm:w-3/4 mx-auto text-center">
                        Join us for an exclusive CEO talk where leaders from top tech companies
                        discuss emerging trends in data, AI, and innovation.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                    <img src={date} alt="Calendar" className="w-6 h-6" />
                    <h3 className="font-bold text-sm">8 - 9 NOV, 2024</h3>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                    <img src={map} alt="Location" className="w-8 h-8 lg:w-6 lg:h-6" />
                    <a
                        href="https://www.google.com/maps/place/Satyendra+Nath+Bose+Academic+Building/@22.802616,89.5321499,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff8549472ab2c7:0x581022fe2caec6f6!8m2!3d22.8026111!4d89.5347248!16s%2Fg%2F11ddwhpz14?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="font-bold text-sm"
                    >
                        DR. Satyendra Nath Bose Academic Building, Khulna University
                    </a>
                    </div>
                    <div>
                    <div className="flex gap-4 w-fit mx-auto">
                        <a
                        className="border-[1px] border-black hover:bg-buttonHover inline-block px-4 py-2 rounded"
                        href="#"
                        >
                        Register Now!
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;
