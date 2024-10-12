import { Helmet } from "react-helmet-async";
// import InnovationsOverview from "./InnovationOerview/InnovationsOverview";

// import InnovationCard from "../../Shared/Innovations/InnovationCard";
import Banner from "./Banner/Banner";
import PrizeSystem from "./PrizeSystem/PrizeSystem";
import NextStepCallToAction from "./NextStepCallToAction/NextStepCallToAction";
import EventDetails from "./EventDetails copy/EventDetails";
import ExternalButton from "./ExternalButton/ExternalButton";
import ContactInfo from "./ContactInfo/ContactInfo";
import RulesAndRegulations from "./RulesAndRegulations/RulesAndRegulations";
import { useState } from "react";
// import ContestDetails from "./ContestDetails/ContestDetails";
// import SamplePoster from "./../../../public/File/demoInnovation.pdf";


const InnovationShowCasing = () => {
    // const [innovations , setInnovations] = useState([]);
    // useEffect(() =>{
    //     fetch('innovations.json')
    //     .then(res => res.json())
    //     .then(data => setInnovations(data));
    // })
    const [open, setOpen] = useState(false);

// const handleDownload = () => {
//   // Your download logic here
// };

    const SamplePoster = './../../../public/File/demoInnovation.pdf'; // Replace with your PDF file path

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = SamplePoster;
        link.download = 'your-file.pdf'; // This will be the name of the downloaded file
        link.click();
    };
    return (
        <div className="space-y-5 text-center">
            <Helmet>
                <title>Innovation Showcasing | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <Banner></Banner>
            {/* <h2 className="text-center pt-5 text-5xl mt-20 text-yellow-700 py-10">Innovation Showcasing</h2> */}
            <EventDetails></EventDetails>
            <ExternalButton></ExternalButton>
            <PrizeSystem></PrizeSystem>
            <p className="text-yellow-700 font-bold text-2xl">Make Your POSTER</p>
            <div className="bg-indigo-900 text-white p-8 rounded-lg shadow-md max-w-xl mx-auto my-10">
                <p className="text-2xl text-yellow-700 font-semibold lg:pb-3">Download Sample Poster to know more!</p>
                <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn text-lg lg:px-6 bg-amber-600 text-white">Sample Poster</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-2">
                        <li><button className="inline-block bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300" onClick={handleDownload}>
                        DOWNLOAD PDF!
                        </button></li>
                        <li><a
                        href="https://www.canva.com/design/DAGTUkggOx8/5AaTLhmAFvAiQOMgrH-cnQ/view?utm_content=DAGTUkggOx8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview "
                        target="_blank" // Opens link in a new tab
                        rel="noopener noreferrer"
                        className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                    >
                        EDIT HERE!
                    </a></li>
                    </ul>
                </div>
            </div>
            
            {/* <div className="bg-indigo-900 text-white p-8 rounded-lg shadow-md max-w-xl mx-auto my-10">
                <p className="text-white font-bold text-xl mb-2">Edit your poster from here!</p>
                <a
                    href="https://www.canva.com/design/DAGTUkggOx8/5AaTLhmAFvAiQOMgrH-cnQ/view?utm_content=DAGTUkggOx8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview "
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                >
                    EDIT FILE!
                </a>
            </div> */}
            

            {/* <InnovationsOverview></InnovationsOverview> */}
            <p className="text-yellow-700 text-2xl font-bold"> Your Next Step</p>
            <NextStepCallToAction></NextStepCallToAction>
            {/* <div className="p-10">
                <p className="text-2xl text-white text-center">Here are some innovations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 justify-items-center">
                {innovations.map((project, index) => (
                    <InnovationCard key={index} project={project} />
                ))}
            </div> */}

            
            {/* <ContestDetails></ContestDetails> */}
            <RulesAndRegulations></RulesAndRegulations>
            <ContactInfo></ContactInfo>
            
        </div>
    );
};

export default InnovationShowCasing;