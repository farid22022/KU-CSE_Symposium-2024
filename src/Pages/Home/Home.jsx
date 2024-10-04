
// import Banner2 from "./Banner/Banner2";

import {Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div className="space-y-2 h-screen">
            <Helmet>
                <title>Home | KUCSE-Symposium-2024</title>
            </Helmet>
            {/* <Banner2></Banner2> */}
            <h2 className="text-center pt-20 text-2xl">Home</h2>
            
        </div>
    );
};

export default Home;

