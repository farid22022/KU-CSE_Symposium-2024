import { Helmet } from "react-helmet-async";
import Overview from "./Overview/Overview";
import Banner from "./Banner/Banner";
import ImageSlider from "./ImageSlider";
import Program from "./Program/program";
import EventDetails from "./EventDetails copy/EventDetails";
import ContactInfo from "./ContactInfo/ContactInfo";
import Gallery from "./Gallery/Gallery";
// import Gallery from "./Gallery/Gallery";


const PS = () => {
    return (
        <div className="space-y-2 text-center ">
            <Helmet>
                <title>CEO Talk | KUCSE-Symposium-2024</title>
            </Helmet>
            <div className="">
                <Banner></Banner>
            </div>
            {/* <h2 className="text-center text-5xl font-bold text-yellow-700 mb-10">Symposium Talk</h2> */}
            {/* <EventDetails></EventDetails> */}
            <ImageSlider></ImageSlider>
            <Program></Program>
            {/* <Overview></Overview> */}
            
            
            {/* <ContactInfo></ContactInfo> */}

        </div>
    );
};

export default PS;