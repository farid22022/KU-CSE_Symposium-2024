import { Helmet } from "react-helmet-async";
import CPSection from "./CPsection/CPsection";


const CP = () => {
    return (
        <div className="space-y-2 ">
            <Helmet>
                <title>Context Programming | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            
            <CPSection></CPSection>
            
            
            
        </div>
    );
};

export default CP;