import { Helmet } from "react-helmet-async";
import CPSection from "./CPsection/CPsection";
import Banner from "./Banner/Banner";
import EventDetails from "./EventDetails copy/EventDetails";
import ContestDate from "./ContestDate/ContestDate";
import ContactInfo from "./ContactInfo/ContactInfo";
import TimeTable from "./TimeTable/TimeTable";


const CP = () => {
    return (
        <div className="space-y-2 text-center">
            <Helmet>
                <title>Context Programming | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <Banner></Banner>
            <EventDetails></EventDetails>
            <p className="text-6xl mt-10 font-bold text-white my-5">Timeline</p>
            <TimeTable></TimeTable>
            {/* <ContestDate></ContestDate> */}
            <CPSection></CPSection>
            <ContactInfo></ContactInfo>
            
            
            
        </div>
    );
};

export default CP;