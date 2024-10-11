import { Helmet } from "react-helmet-async";
import Overview from "./Overview/Overview";
import Banner from "./Banner/Banner";
import ImageSlider from "./mageSlider";
import EventDetails from "./EventDetails copy/EventDetails";


const PS = () => {
    return (
        <div className="space-y-2  ">
            <Helmet>
                <title>CEO Talk | KUCSE-Symposium-2024</title>
            </Helmet>
            <div className="">
                <Banner></Banner>
            </div>
            {/* <h2 className="text-center text-5xl font-bold text-yellow-700 mb-10">Symposium Talk</h2> */}
            <EventDetails></EventDetails>
            <Overview></Overview>
            <ImageSlider></ImageSlider>
            
            
            
        </div>
    );
};

export default PS;