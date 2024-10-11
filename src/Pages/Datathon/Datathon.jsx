import { Helmet } from "react-helmet-async";
import Overview from "./Overview/Overview";
import Banner from "./Banner/Banner";
import Components from "./Components/Components";
import EventDetails from "./EventDetails copy/EventDetails";


const Datathon = () => {
    return (
        <div className="space-y-2 ">
            <Helmet>
                <title>Datathon | KUCSE-Symposium-2024</title>
            </Helmet>
            <Banner></Banner>
            <EventDetails></EventDetails>
            <h2 className="text-center pt-20 text-5xl text-yellow-700 font-bold">Datathon</h2>
            <Components></Components>
            <Overview></Overview>

            
        </div>
    );
};

export default Datathon;