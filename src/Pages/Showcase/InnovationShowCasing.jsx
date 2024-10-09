import { Helmet } from "react-helmet-async";
import InnovationsOverview from "./InnovationOerview/InnovationsOverview";
import { useEffect, useState } from "react";
import InnovationCard from "../../Shared/Innovations/InnovationCard";


const InnovationShowCasing = () => {
    const [innovations , setInnovations] = useState([]);
    useEffect(() =>{
        fetch('innovations.json')
        .then(res => res.json())
        .then(data => setInnovations(data));
    })
    return (
        <div className="space-y-2">
            <Helmet>
                <title>Innovation Showcasing | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <h2 className="text-center pt-20 text-2xl">Innovation Showcasing</h2>
            <InnovationsOverview></InnovationsOverview>
            <div className="p-10">
                <p className="text-2xl text-white text-center">Here are some innovations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 justify-items-center">
                {innovations.map((project, index) => (
                    <InnovationCard key={index} project={project} />
                ))}
            </div>

            <div className="text-center">
                <button >Register Now !</button>
            </div>
            
        </div>
    );
};

export default InnovationShowCasing;