import image from "./../../../../public/logo/KMA-Sir-removebg-preview.png"

const PersonCard = ({ person }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image} // Add image or avatar URL for the CEO
                    alt={person.name}
                />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-xl text-yellow-700">{person.name}</h2>
                <p><strong>{person.title}</strong>, {person.company}</p>
                <p>{person.bio}</p>
                <div className="bg-slate-700 p-3 rounded-lg text-white">
                    <p><strong>Talk Topic:</strong> {person.talkTopic}</p>
                    <p><strong>Date:</strong> {person.date}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;