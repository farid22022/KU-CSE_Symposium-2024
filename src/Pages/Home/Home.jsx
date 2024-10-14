
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
import SlidingCard from './eventsCard/eventsCard';
// import Banner2 from './Banner2/Banner2';

const Home = () => {
    return (
        <div className="space-y-2 ">
            <Helmet>
                <title>Home | KUCSE-Symposium-2024</title>
            </Helmet>
            <Banner></Banner>
            {/* <SlidingCard></SlidingCard> */}
            {/* <h2 className="text-center pt-20 text-2xl">Home</h2> */}
            {/* <Banner></Banner> */}
            {/* <h1 className="text-5xl text-yellow-700 p-5 text-center sm:pb-2 md:pb-5 font-bold">Welcome</h1> */}
            <div className="relative pt-20 pb-40 lg:pb-60 xl:pb-72 2xl:pb-96">
                <svg
                    class="absolute w-full z-30 bottom-[-8px] md:bottom-[-20px] lg:bottom-[-28px] xl:bottom-[-40px] text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 170.68 1440 149.32"
                >
                    <path
                    fill="#f5f5f5"
                    fill-opacity="1"
                    d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
                <div className='container mx-auto md:h-[30vh] lg:h-[20vh]'>
                    <h1 className="text-xl p-2 md:text-3xl lg:text-4xl font-semibold text-bold text-center">
                    Synergy - <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">X</span> 2024: Time to
                    Innovate is Ticking Down!
                </h1>
                <p className="w-3/4 mx-auto text-sm md:text-lg text-gray-400 font-semibold text-center"> {/* Center text */}
                    Join us for a groundbreaking event in tech and ideas!
                </p>
                <Schedule></Schedule>
                </div>
            </div>

            {/* <Welcome></Welcome> */}
            {/* <Events></Events> */}
            <div className="w-screen pt-20 pb-40 lg:pb-56 xl:pb-64 2xl:pb-96 bg-[#f5f5f5] relative mx-auto text-center">
                <div className='container mx-auto py-5'>
                    <h1 class="z-10 text-4xl font-bold text-gray-800 mb-4">Featured Events</h1>
                    <p class="z-10 text-lg text-gray-600">
                        Explore the most exciting competitions and opportunities to engage
                        with industry experts.
                    </p>
                </div>
                <CeoTalk></CeoTalk>
                <Datathon></Datathon>
                <CompitiveProgramming></CompitiveProgramming>
                <Innovations></Innovations>
                <svg
                    class="absolute w-full z-30 bottom-[-5px] sm:bottom-[-10px] md:bottom-[-20px] lg:bottom-[-28px] text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 170.68 1440 149.32"
                    >
                    <path
                        fill="#ffffff"
                        fill-opacity="1"
                        d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </div>
            
            
            <div className="w-screen pt-20 pb-40 lg:pb-56 xl:pb-64 2xl:pb-96 bg-white relative mx-auto text-center">
                <svg
                    class="absolute w-full z-30 bottom-[-8px] sm:bottom-[-10px] md:bottom-[-20px] text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 170.68 1440 149.32"
                    >
                    <path
                        fill="#f5f5f5"
                        fill-opacity="1"
                        d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
                <FrequentlyAQ></FrequentlyAQ>
            </div>
            <div className="w-screen 2xl:h-[70vh] pt-20 pb-40 lg:pb-56 xl:pb-64 2xl:pb-96 bg-[#f5f5f5] relative mx-auto text-center">
                <Sponsorship></Sponsorship>
                <svg
                    class="absolute w-full z-30 bottom-0 sm:bottom-[-5px] md:bottom-[-20px] lg:bottom-[-28px] text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 170.68 1440 149.32"
                >
                    <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
                <svg
                    class="absolute w-full z-30 -bottom-56 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 170.68 1440 149.32"
                >
                    <path
                    fill="#000000"
                    fill-opacity="1"
                    d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Home;

