import "./Banner.css"
import { motion } from "framer-motion";
import dateLogo from "./../../../../public/logo/calendar.png"
import mapLogo from "./../../../../public/logo/google-maps.png"
import Typewriter from 'typewriter-effect';
const Banner = () => {
   return (
      <div className="mb-5 lg:mb-10 bg-cover">  
        <div>  
         <div className="relative w-full backImageBanner text-center">
              <div className="container mx-auto h-[80vw] md:h-[100vh] flex items-center justify-center">
                <svg
                  class="absolute w-full z-30 bottom-[-18px] text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 170.68 1440 149.32"
                >
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
                <div className="text-center md:text-end p-2 md:p-4 lg:p-6">
                    <h1 className="text-xl text-center md:text-2xl lg:text-3xl text-white font-semibold p-2">
                      <Typewriter
                        options={{
                          strings: [`<h1 class="inline font-[900]">Synergy - <span class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">X</span> 2024</h1>`],
                          autoStart: true,
                          loop: true,
                          html: true,
                        }}
                      />
                    </h1>
                    <motion.h1
                      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
                      initial={{ y: "50px", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        duration: 2,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="text-white">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ad8ce5]">
                          NATIONAL SYMPOSIUM ON INDUSTRY-ACADEMIA 
                        </h3>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ad8ce5]">
                          COLLABORATION FOR ICT-ENABLED BANGLADESH
                        </h3>
                      </div>
                    </motion.h1>
                    
                    {/* Center the date and dropdown menu */}
                    <div className="flex flex-col items-center mt-2">
                      <motion.div
                        initial={{ x: "760px", y: "10px", opacity: 0 }}
                        animate={{ x: "0px", y: "0px", opacity: 1 }} // Adjusted x value for better centering
                        transition={{
                          type: "spring",
                          damping: 70,
                          stiffness: 350,
                          duration: 2,
                          repeatType: "reverse",
                        }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                        <h4 className="font-semibold text-white text-sm md:text-base lg:text-lg">
                          10-12 November, 2024
                        </h4>
                      </motion.div>
                      <motion.div
                        initial={{ x: "760px", y: "10px", opacity: 0 }}
                        animate={{ x: "0px", y: "0px", opacity: 1 }} // Adjusted x value for better centering
                        transition={{
                          type: "spring",
                          damping: 70,
                          stiffness: 350,
                          duration: 2,
                          repeatType: "reverse",
                        }}
                        className="flex items-center justify-center space-x-2 text-white mt-2"
                      >
                        <img src={mapLogo} alt="Location" className="w-10 h-10 lg:w-6 lg:h-6" />
                        <a 
                          href="https://www.google.com/maps/place/Satyendra+Nath+Bose+Academic+Building/@22.802616,89.5321499,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff8549472ab2c7:0x581022fe2caec6f6!8m2!3d22.8026111!4d89.5347248!16s%2Fg%2F11ddwhpz14?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-bold text-lg"
                        >
                          DR. Satyendra Nath Bose Academic Building, Khulna University
                        </a>
                      </motion.div>

                      {/* Dropdown using <details> and <summary> */}
                      <details className="dropdown mt-3">
                        <summary className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-md cursor-pointer text-sm md:text-base lg:text-lg">
                          Register
                        </summary>
                        <ul className="menu z-50 dropdown-content bg-white hover:bg-white rounded-box w-fit p-2 mt-1 shadow">
                          <li>
                            <a 
                              href="https://forms.gle/2W3AGyuvKv6YWMMK8 "
                              target="_blank" // Opens link in a new tab
                              rel="noopener noreferrer"
                              className="px-2 py-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:font-semibold transition-all duration-500">
                              Symposium Talk
                            </a>
                          </li>
                          <li>
                            <a href="https://forms.gle/KdZ4BuCSAZ61e17t7" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="px-2 py-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:font-semibold transition-all duration-500">
                              Innovation
                            </a>
                          </li>
                          <li>
                            <a 
                              href="https://docs.google.com/forms/d/e/1FAIpQLSc19e1XkB1hkc4xlPjstSgiqGFJ9QKIElyblW-Xot-YNYReog/viewform "
                              target="_blank" // Opens link in a new tab
                              rel="noopener noreferrer" 
                              className="px-2 py-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:font-semibold transition-all duration-500">Contest Programming</a>
                          </li>
                          <li>
                            <a href="#" 
                            className="px-2 py-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:font-semibold transition-all duration-500">Datathon</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
   )
} 
export default Banner;

