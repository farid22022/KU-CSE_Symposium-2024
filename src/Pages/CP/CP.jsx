import { Helmet } from "react-helmet-async";
import CPSection from "./CPsection/CPsection";
import Banner from "./Banner/Banner";
import EventDetails from "./EventDetails copy/EventDetails";
import ContestDate from "./ContestDate/ContestDate";


const CP = () => {
    return (
        <div className="space-y-2 text-center">
            <Helmet>
                <title>Context Programming | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <Banner></Banner>
            <EventDetails></EventDetails>
            <ContestDate></ContestDate>
            <CPSection></CPSection>
            
            
            
        </div>
    );
};

export default CP;