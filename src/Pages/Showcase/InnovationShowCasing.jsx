import { Helmet } from "react-helmet-async";
// import InnovationsOverview from "./InnovationOerview/InnovationsOverview";

// import InnovationCard from "../../Shared/Innovations/InnovationCard";
import Banner from "./Banner/Banner";
import PrizeSystem from "./PrizeSystem/PrizeSystem";
import NextStepCallToAction from "./NextStepCallToAction/NextStepCallToAction";
import EventDetails from "./EventDetails copy/EventDetails";
import ExternalButton from "./ExternalButton/ExternalButton";
import ContactInfo from "./ContactInfo/ContactInfo";
// import ContestDetails from "./ContestDetails/ContestDetails";
// import SamplePoster from "./../../../public/File/demoInnovation.pdf";


const InnovationShowCasing = () => {
    // const [innovations , setInnovations] = useState([]);
    // useEffect(() =>{
    //     fetch('innovations.json')
    //     .then(res => res.json())
    //     .then(data => setInnovations(data));
    // })

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
            <p className="text-xl text-yellow-700 font-semibold">Download Sample Poster to know more!</p>
            <div className="text-center ">
                <button className="inline-block bg-amber-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300" onClick={handleDownload}>
                    SAMPLE POSTER !
                </button>
            </div>
            {/* <InnovationsOverview></InnovationsOverview> */}
            <NextStepCallToAction></NextStepCallToAction>
            {/* <div className="p-10">
                <p className="text-2xl text-white text-center">Here are some innovations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 justify-items-center">
                {innovations.map((project, index) => (
                    <InnovationCard key={index} project={project} />
                ))}
            </div> */}

            <div className="text-center ">
                <a
                    href="https://forms.gle/KdZ4BuCSAZ61e17t7 "
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition text-center"
                >
                    SEND POSTER!
                </a>
            </div>
            {/* <ContestDetails></ContestDetails> */}
            <ContactInfo></ContactInfo>
            
        </div>
    );
};

export default InnovationShowCasing;