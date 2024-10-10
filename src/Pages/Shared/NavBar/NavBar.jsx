// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// export let LoggedEmail = '';
// import { motion } from "framer-motion";
// import logo from "./../../../../public/logo/ku-logo.png"

// const NavBar = () => {
//     const { user } = useContext(AuthContext);
//     LoggedEmail = user?.email;

    

//     const navOption1 = 
//     <div className="dropdown dropdown-end">
        
//         <button  className="hover:ml-16 transition-all duration-700" >Register</button>
//     </div>

//     const navOptions = <div className="flex -translate-y-10">
//         <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700 " to="/">Home</Link></li>
//         <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/datathon">Datathon</Link></li>
//         <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/cp">Contest Programming</Link></li>
//         <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/ps"> CEO Talking</Link></li>
//         <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/innovations">Innovations</Link></li>
//         <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/about">About Us</Link></li>
        
//     </div>

//     return (
//         <div className="navbar fixed z-10 -mt-2 bg-opacity-0 max-w-screen bg-black text-white ">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <motion.ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-10 shadow bg-base-100 rounded-box w-52" initial={{ y: -550 }} animate={{ y: 10 }}>
//                         {navOptions}
//                     </motion.ul>
//                 </div>
//                 <div className="">
//                     <motion.img 
//                     initial={{y:'10px',scale:.7,opacity:0}}
//                     animate={{y:0,scale:1,opacity:1}}
//                     transition={{type:'keyframes',damping:60,stiffness:350,duration:2.5,delay:1.5}}
//                     className="w-1/3" src={logo}

//                     />

//                     </div>
                
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <motion.ul className="menu menu-horizontal px-1"
//                     initial={{x:'-100vw'}}
//                     animate={{x:0}}
//                     transition={{type:'spring', stiffness:350, delay:0, duration:1.5}}
//                 >
//                     {navOptions}
//                 </motion.ul>
//             </div>
//             <motion.div className="navbar-end"
//                 initial={{ x: '-100vw' }}
//                 animate={{ x: 0 }}
//                 transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 300 }}
//             >
//                 {navOption1}
//             </motion.div>
//         </div>
//     );
// };

// export default NavBar;

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
export let LoggedEmail = '';
import { motion } from "framer-motion";
import logo from "./../../../../public/logo/ku-logo.png";

const NavBar = () => {
    const { user } = useContext(AuthContext);
    LoggedEmail = user?.email;

    // State to track scroll position and set background color
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true); // When scrolled 50px down, background becomes black
            } else {
                setScroll(false); // Reset background when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navOption1 = (
        <div className="dropdown dropdown-end">
            <button className="hover:ml-16 transition-all duration-700">Register</button>
        </div>
    );

    const navOptions = (
        <div className="flex -translate-y-10">
            <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/">Home</Link></li>
            <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/datathon">Datathon</Link></li>
            <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/cp">Contest Programming</Link></li>
            <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/ps">CEO Talking</Link></li>
            <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/innovations">Innovations</Link></li>
            <li><Link className="hover:text-xl hover:shadow-inner hover:shadow-white transition-all duration-700" to="/about">About Us</Link></li>
        </div>
    );

    return (
        <div
            className={`navbar fixed z-10 -mt-2 max-w-screen text-white transition-all duration-500 -pb-16 ${
                scroll ? "bg-black" : "bg-opacity-0"
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <motion.ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-10 shadow bg-base-100 rounded-box w-52"
                        initial={{ y: -50 }}
                        animate={{ y: 10 }}
                    >
                        {navOptions}
                    </motion.ul>
                </div>
                <div className="">
                    <motion.img
                        initial={{ y: '10px', scale: .7, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{ type: 'keyframes', damping: 60, stiffness: 350, duration: 2.5, delay: 1.5 }}
                        className="w-1/3"
                        src={logo}
                    />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <motion.ul
                    className="menu menu-horizontal px-1"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 350, delay: 0, duration: 1.5 }}
                >
                    {navOptions}
                </motion.ul>
            </div>
            <motion.div
                className="navbar-end"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 300 }}
            >
                {navOption1}
            </motion.div>
        </div>
    );
};

export default NavBar;
