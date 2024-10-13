import imageO from "./../../../../public/logo/KMA-Sir-removebg-preview.png";

const PersonCard = ({ schedule, speaker, company, position, topic, linkedin, image }) => {
    return (
        <div className="card bg-[#2b0d3b] max-w-xs sm:max-w-md md:max-w-lg shadow-2xl shadow-black mx-auto my-4">
            <figure>
                <img className="w-2/3 p-3 md:w-1/2 mx-auto rounded-full  hover-text-xl" src={image} alt={speaker} />
            </figure>
            <div className="card-body bg-slate-900 rounded-b-xl text-start p-4">
                <h2 className="card-title text-yellow-700 text-lg md:text-xl ">{speaker}</h2>
                <p className="text-base md:text-sm "><strong className="font-bold text-white text-xl">{position}</strong> </p>
                <p className="text-base md:text-sm "><strong className="font-bold text-black badge-info p-1 rounded-md">{company}</strong> </p>
                <p className="text-base md:text-lg text-white"><span className="text-yellow-500">Topic: </span>{topic}</p>
                <p className="text-base md:text-lg text-white"><strong className="font-bold text-yellow-500">Schedule:</strong> {schedule}</p>
                <div className="card-actions justify-end">
                    {linkedin ? (
                        <a 
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer">
                            <button className="btn btn-primary">View LinkedIn</button>
                        </a>
                    ) : (
                        <button className="btn btn-primary" disabled>Coming Soon</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PersonCard;
