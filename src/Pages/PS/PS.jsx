import { Helmet } from "react-helmet-async";
import Overview from "./Overview/Overview";


const PS = () => {
    return (
        <div className="space-y-2  ">
            <Helmet>
                <title>CEO Talk | KUCSE-Symposium-2024</title>
            </Helmet>
            <div>
                
            </div>
            <h2 className="text-center pt-28 text-5xl text-white ">CEO Talk</h2>
            <Overview></Overview>
            <div className="text-center">
                <button >Register Now !</button>
            </div>
            
            
        </div>
    );
};

export default PS;