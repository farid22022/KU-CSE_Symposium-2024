import { Helmet } from "react-helmet-async";
import Overview from "./Overview/Overview";
import Banner from "./Banner/Banner";
import Components from "./Components/Components";
import EventDetails from "./EventDetails copy/EventDetails";
import PrizeSystem from "./PrizeSystem/PrizeSystem";
import DatathonOverview from "./DatathonOverview/DatathonOverview";
import GroomingSessionStructure from "./GroomingSessionStructure/GroomingSessionStructure";
import PreliminaryRoundDetails from "./PreliminaryRoundDetails/PreliminaryRoundDetails";
import OnsiteFinalContestDetails from "./OnsiteFinalContestDetails/OnsiteFinalContestDetails";
import DatathonRules from "./DatathonRules/DatathonRules";
import ContactInfo from "./ContactInfo/ContactInfo";


const Datathon = () => {
    return (
        <div className="space-y-8 ">
            <Helmet>
                <title>Datathon | KUCSE-Symposium-2024</title>
            </Helmet>
            <Banner></Banner>
            <EventDetails></EventDetails>
            <DatathonOverview></DatathonOverview>
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
                Step 1: Team Formation and Grooming Sessions
            </h2>
            <GroomingSessionStructure></GroomingSessionStructure>
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
                Step 2: Preliminary Round
            </h2>
            {/* <h2 className="text-center pt-20 text-5xl text-yellow-700 font-bold">Datathon</h2> */}
            {/* <Components></Components> */}
            <PreliminaryRoundDetails></PreliminaryRoundDetails>
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
                Step 3: Onsite Final Contest
            </h2>
            <OnsiteFinalContestDetails></OnsiteFinalContestDetails>
            {/* <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
                Prizes
            </h2> */}
            <PrizeSystem></PrizeSystem>
            {/* <Overview></Overview> */}
            <DatathonRules></DatathonRules>
            <ContactInfo></ContactInfo>

            
        </div>
    );
};

export default Datathon;