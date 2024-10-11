import { Helmet } from "react-helmet-async";
import CPSection from "./CPsection/CPsection";
import Banner from "./Banner/Banner";
import EventDetails from "./EventDetails copy/EventDetails";


const CP = () => {
    return (
        <div className="space-y-2 ">
            <Helmet>
                <title>Context Programming | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <Banner></Banner>
            <EventDetails></EventDetails>
            <CPSection></CPSection>
            
            
            
        </div>
    );
};

export default CP;