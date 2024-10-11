
// import Banner2 from "./Banner/Banner2";

import {Helmet} from 'react-helmet-async';
import Banner from './Banner/Banner'
import Welcome from './Welcome/Welcome';
import Schedule from './Schedule/Schedule';
import Datathon from './FeaturedEvents/Datathon';
import Events from './FeaturedEvents/Events';
import CompitiveProgramming from './FeaturedEvents/CompitiveProgramming';
import CeoTalk from './FeaturedEvents/CEO/CeoTalk';
import Innovations from './FeaturedEvents/Innovations/Innovations';
import FrequentlyAQ from './FAQ/FrequentlyAQ';
import Sponsorship from './Sponsor/Sponsorship';

const Home = () => {
    return (
        <div className="space-y-2 ">
            <Helmet>
                <title>Home | KUCSE-Symposium-2024</title>
            </Helmet>
            <Banner></Banner>
            {/* <h2 className="text-center pt-20 text-2xl">Home</h2> */}
            {/* <Banner></Banner> */}
            <h1 className="text-5xl text-yellow-700 p-5 text-center sm:pb-2 md:pb-5 font-bold">Welcome</h1>
            <Schedule></Schedule>
            {/* <Welcome></Welcome> */}
            <Events></Events>
            <h1 className="text-5xl text-yellow-700 p-5 font-bold text-center pt-20">CEO Talk</h1>
            <CeoTalk></CeoTalk>
            <h1 className="text-5xl text-yellow-700 p-5 font-bold text-center pt-20">Innovation ShowCasing</h1>
            <Innovations></Innovations>
            <h1 className="text-5xl text-yellow-700 font-bold p-5 text-center pt-20">Programming Contest</h1>
            <CompitiveProgramming></CompitiveProgramming>
            <h1 className="text-5xl text-yellow-700 p-5 pt-8 font-bold text-center">Datathon</h1>
            <Datathon></Datathon>
            
            <FrequentlyAQ></FrequentlyAQ>
            <Sponsorship></Sponsorship>
            
        </div>
    );
};

export default Home;

