import "./Inno.css";
import icon from "./../../../../public/logo/output-onlinegiftools.gif";

const InnovationsOverview = () => {
    return (
        <div className="mx-auto flex flex-col md:flex-row p-5 text-center backImageInn">
            <div className="flex justify-center mb-4 md:mb-0 md:w-1/3">
                <img className="w-1/2" src={icon} alt="Innovations Icon" className="max-w-full h-auto" />
            </div>
            <div className="bg-slate-200 p-6 opacity-65 rounded-lg shadow-md md:w-2/3 lg:m-20">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-700">What are Innovations?</h2>
                <p className="text-lg mb-4 text-black">
                    The Innovations section showcases cutting-edge technology projects and
                    innovative ideas developed by talented individuals and teams. It serves as a
                    platform for participants to demonstrate their creativity and technical skills.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-yellow-700">Purpose</h2>
                <p className="text-lg text-black">
                    The goal of this section is to inspire creativity and foster collaboration
                    among participants, encouraging them to think outside the box and work together
                    to create impactful solutions for real-world challenges.
                </p>
            </div>
        </div>
    );
};

export default InnovationsOverview;
