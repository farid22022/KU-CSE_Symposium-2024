import { Helmet } from "react-helmet-async";
import About from "./About/About";


const AboutUs = () => {
    return (
        <div className="space-y-2 ">
            <Helmet>
                <title>AboutUs | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <About></About>
            
        </div>
    );
};

export default AboutUs;