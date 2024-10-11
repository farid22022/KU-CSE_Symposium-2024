// import "./welcome.css"
// import image from "./../../../../public/Banner/data3.jpg"

// const Welcome = () => {
//     return (
//         <div className="flex space-x-10 backImage bg-fixed p-5 pt-20 pb-20 justify-center ">
            
//             <div className="bg-slate-200 opacity-50 rounded-xl p-3 w-1/2">
//                 <p className="text-black">Here’s a rewritten version for Khulna University and the KUCSE-Symposium:

// Khulna University is one of the premier public universities in Bangladesh, renowned for its vibrant academic environment and commitment to fostering innovation and research. The Computer Science and Engineering (CSE) discipline at Khulna University is proud to host the KUCSE-Symposium 2024, which will take place in February 2024 at Khulna University.

// This symposium aims to bring together academic scholars, researchers, and industry professionals to exchange knowledge and explore advancements in fields such as Competitive Programming (CP), Data Science (Datathon), leadership through CEO Talks, and cutting-edge innovations. The event will serve as a platform to discuss groundbreaking ideas, foster collaboration, and inspire the next generation of engineers and technologists.

// We look forward to welcoming you to KUCSE-Symposium 2024 at Khulna University, Bangladesh!</p>
//             </div>
//             <div className="text-end justify-end">
//                 <img className="p-5 " src={image} />
//             </div>
//         </div>
//     );
// };

// export default Welcome;

import "./welcome.css";
import image from "./../../../../public/Banner/data3.jpg";

const Welcome = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 md:space-y-0 bg-fixed p-5 pt-20 pb-20 justify-center items-center  backImage">
            
            {/* Text Section */}
            <div className="bg-slate-200 opacity-80 rounded-xl p-5 w-full md:w-1/2">
                <p className="text-black text-sm md:text-base">
                    Khulna University is one of the premier public universities in Bangladesh, renowned for its vibrant academic environment and commitment to fostering innovation and research. The Computer Science and Engineering (CSE) discipline at Khulna University is proud to host the KUCSE-Symposium 2024, which will take place in February 2024 at Khulna University.
                    <br/><br/>
                    This symposium aims to bring together academic scholars, researchers, and industry professionals to exchange knowledge and explore advancements in fields such as Competitive Programming (CP), Data Science (Datathon), leadership through CEO Talks, and cutting-edge innovations. The event will serve as a platform to discuss groundbreaking ideas, foster collaboration, and inspire the next generation of engineers and technologists.
                    <br/><br/>
                    We look forward to welcoming you to KUCSE-Symposium 2024 at Khulna University, Bangladesh!
                </p>
            </div>
            
            {/* Image Section */}
            <div className="flex justify-center md:justify-end">
                <img className="p-5 max-w-xs md:max-w-sm box-border" src={image} alt="Symposium" />
            </div>
        </div>
    );
};

export default Welcome;
