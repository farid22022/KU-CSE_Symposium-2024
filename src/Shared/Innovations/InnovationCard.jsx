

const InnovationCard = ({ project }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 opacity-65 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base mb-4">{project.description}</p>
                <div className="text-sm font-semibold">
                    <span className="text-gray-500">Technologies: </span>
                    {project.technologies.join(', ')}
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {project.team}
                </span>
                <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {project.date}
                </span>
            </div>
        </div>
    );
};

export default InnovationCard;
