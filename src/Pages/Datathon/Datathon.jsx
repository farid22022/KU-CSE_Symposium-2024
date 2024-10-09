import { Helmet } from "react-helmet-async";
import Overview from "./Overview/Overview";


const Datathon = () => {
    return (
        <div className="space-y-2 h-screen">
            <Helmet>
                <title>Datathon | KUCSE-Symposium-2024</title>
            </Helmet>
            
            <h2 className="text-center pt-20 text-5xl text-yellow-700 font-bold">Datathon</h2>
            <Overview></Overview>
            
        </div>
    );
};

export default Datathon;