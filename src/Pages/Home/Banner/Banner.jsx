import ku1 from "./../../../../public/Banner/ku2.jpg"
import "./Banner.css"
import { motion } from "framer-motion";
import dateLogo from "./../../../../public/logo/schedule.png"
import Typewriter from 'typewriter-effect';
const Banner = () => {
   return (
      <div>
            <div className="carousel w-full  border-y-red-800">
              
            <div id="slide1" className="carousel-item relative w-full h-screen">
              <img src={ku1} className="opacity-90 object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center md:text-end p-4 md:p-6 lg:p-8"> {/* Adjusted padding for better responsiveness */}
                <h1 className="text-lg md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                  <Typewriter
                    options={{
                      strings: ['WELCOME', 'TO'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
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
                  KUCSE Symposium - 2024
                </motion.h1>
                <div className="text-white p-2 md:p-4 lg:p-5"> {/* Adjusted padding */}
                  <h3 className="text-xs md:text-base lg:text-lg text-yellow-700 font-semibold">
                    NATIONAL SYMPOSIUM ON INDUSTRY-ACADEMIA COLLABORATION
                  </h3>
                  <h3 className="text-xs md:text-base lg:text-lg text-yellow-700 font-semibold">
                    FOR ICT-ENABLED BANGLADESH
                  </h3>
                </div>
                <div>
                  <motion.div
                    initial={{ x: "760px", y: "10px", opacity: 0 }}
                    animate={{ x: "760px", y: "0px", opacity: 1 }}
                    transition={{
                      type: "spring",
                      damping: 70,
                      stiffness: 350,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                      <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                      <h4 className="text-yellow-700 font-semibold text-xs md:text-base lg:text-lg">
                        10-12 November, 2024
                      </h4>
                    </div>
                  </motion.div>

                  {/* Dropdown using <details> and <summary> */}
                  <details className="dropdown mt-3">
                    <summary className="btn bg-amber-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer text-xs md:text-base lg:text-lg w-full md:w-auto">
                      Register
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Innovation</a></li>
                      <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Contest Programming</a></li>
                      <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Datathon</a></li>
                    </ul>
                  </details>
                </div>
              </div>
            </div>

              {/* Carousel Navigation Arrows */}
              {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="text-3xl md:text-5xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide2" className="text-3xl md:text-5xl btn-circle hidden sm:block">
                  ❯
                </a>
              </div> */}
            </div>




            <div id="slide2" className="carousel-item relative w-full h-screen">
              <img src={ku1} className="opacity-90 object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center md:text-end p-2 md:p-4 lg:p-6"> {/* Adjusted padding for responsiveness */}
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                    <Typewriter
                      options={{
                        strings: ['WELCOME', 'TO'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
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
                    KUCSE Symposium - 2024
                  </motion.h1>
                  <div className="text-white p-2 md:p-4 lg:p-5"> {/* Adjusted padding */}
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                      
NATIONAL SYMPOSIUM ON INDUSTRY-ACADEMIA COLLABORATION 
                    </h3>
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                    FOR ICT-ENABLED BANGLADESH
                    </h3>
                  </div>
                  <div>
                    <motion.div
                      initial={{ x: "760px", y: "10px", opacity: 0 }}
                      animate={{ x: "760px", y: "0px", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 70,
                        stiffness: 350,
                        duration: 2,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                        <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                        <h4 className="text-yellow-700 font-semibold text-sm md:text-base lg:text-lg">
                          10-12 November, 2024
                        </h4>
                      </div>
                    </motion.div>

                    {/* Dropdown using <details> and <summary> */}
                    <details className="dropdown mt-3">
                      <summary className="btn bg-amber-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer text-sm md:text-base lg:text-lg sm:w-full">
                        Register
                      </summary>
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Innovation</a></li>
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Contest Programming</a></li>
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Datathon</a></li>
                      </ul>
                    </details>

                  </div>
                </div>
              </div>

              {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide3" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❯
                </a>
              </div> */}
            </div>



            <div id="slide3" className="carousel-item relative w-full h-screen">
              <img src={ku1} className="opacity-90 object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center md:text-end p-2 md:p-4 lg:p-6"> {/* Adjusted padding for responsiveness */}
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                    <Typewriter
                      options={{
                        strings: ['WELCOME', 'TO'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
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
                    KUCSE Symposium - 2024
                  </motion.h1>
                  <div className="text-white p-2 md:p-4 lg:p-5"> {/* Adjusted padding */}
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                      Join us at KUCSE-Symposium 2024 for an exciting journey through Competitive Programming, Datathon, CEO Talks,
                    </h3>
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                      and Innovation challenges, where creativity and expertise collide!
                    </h3>
                  </div>
                  <div>
                    <motion.div
                      initial={{ x: "760px", y: "10px", opacity: 0 }}
                      animate={{ x: "760px", y: "0px", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 70,
                        stiffness: 350,
                        duration: 2,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                        <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                        <h4 className="text-yellow-700 font-semibold text-sm md:text-base lg:text-lg">
                          10-12 November, 2024
                        </h4>
                      </div>
                    </motion.div>

                    {/* Dropdown using <details> and <summary> */}
                    <details className="dropdown mt-3">
                      <summary className="btn bg-amber-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer text-sm md:text-base lg:text-lg sm:w-full">
                        Register
                      </summary>
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Innovation</a></li>
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Contest Programming</a></li>
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Datathon</a></li>
                      </ul>
                    </details>

                  </div>
                </div>
              </div>

              {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide4" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❯
                </a>
              </div> */}
            </div>



            <div id="slide4" className="carousel-item relative w-full h-screen">
              <img src={ku1} className="opacity-90 object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center md:text-end p-2 md:p-4 lg:p-6"> {/* Adjusted padding for responsiveness */}
                  <h1 className="text-xl md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                    <Typewriter
                      options={{
                        strings: ['WELCOME', 'TO'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
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
                    KUCSE Symposium - 2024
                  </motion.h1>
                  <div className="text-white p-2 md:p-4 lg:p-5"> {/* Adjusted padding */}
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                      Join us at KUCSE-Symposium 2024 for an exciting journey through Competitive Programming, Datathon, CEO Talks,
                    </h3>
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                      and Innovation challenges, where creativity and expertise collide!
                    </h3>
                  </div>
                  <div>
                    <motion.div
                      initial={{ x: "760px", y: "10px", opacity: 0 }}
                      animate={{ x: "760px", y: "0px", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 70,
                        stiffness: 350,
                        duration: 2.5,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                        <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                        <h4 className="text-yellow-700 font-semibold text-sm md:text-base lg:text-lg">
                          10-12 November, 2024
                        </h4>
                      </div>
                    </motion.div>

                    {/* Dropdown using <details> and <summary> */}
                    <details className="dropdown mt-3">
                      <summary className="btn bg-amber-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-md cursor-pointer text-sm md:text-base lg:text-lg sm:w-full">
                        Register
                      </summary>
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Innovation</a></li>
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Contest Programming</a></li>
                        <li><a href="#" className="hover:bg-gray-100 px-4 py-2">Datathon</a></li>
                      </ul>
                    </details>

                  </div>
                </div>
              </div>

              {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide1" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❯
                </a>
              </div> */}
            </div>





              {/* <div id="slide2" className="carousel-item relative w-full h-screen">
                <img
                  src={ku1}
                  className="opacity-90 object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center md:text-end p-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                      <Typewriter
                      options={{
                        strings: ['WELCOME', 'TO'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </h1>
                    <motion.h1
                      className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
                      initial={{ y: "50px", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      KUCSE Symposium - 2024
                    </motion.h1>
                    <div className="text-white p-2 md:p-5">
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                        Join us at KUCSE-Symposium 2024 for an exciting journey through Competitive Programming, Datathon, CEO Talks,
                      </h3>
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                        and Innovation challenges, where creativity and expertise collide!
                      </h3>
                    </div>
                    <div>
                      <motion.div
                        initial={{ x: "760px", y: "10px", opacity: 0 }}
                        animate={{ x: "760px", y: "0px", opacity: 1 }}
                        transition={{
                          type: "spring",
                          damping: 70,
                          stiffness: 350,
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                          <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                          <h4 className="text-yellow-700 font-semibold text-sm md:text-base lg:text-lg">
                            10-12 November, 2024
                          </h4>
                        </div>
                      </motion.div>
                      <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
                          Submissions & Publications
                        </button>
                        <button className="border-amber-800 border-2 text-amber-800 px-4 py-2 rounded-md">
                          Important Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide3" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❯
                </a>
                </div>
              </div> */}



              {/* <div id="slide3" className="carousel-item relative w-full h-screen">
                <img
                  src={ku1}
                  className="opacity-90 object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center md:text-end p-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                      <Typewriter
                      options={{
                        strings: ['WELCOME', 'TO'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </h1>
                    <motion.h1
                      className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
                      initial={{ y: "50px", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      KUCSE Symposium - 2024
                    </motion.h1>
                    <div className="text-white p-2 md:p-5">
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                        Join us at KUCSE-Symposium 2024 for an exciting journey through Competitive Programming, Datathon, CEO Talks,
                      </h3>
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                        and Innovation challenges, where creativity and expertise collide!
                      </h3>
                    </div>
                    <div>
                      <motion.div
                        initial={{ x: "760px", y: "10px", opacity: 0 }}
                        animate={{ x: "760px", y: "0px", opacity: 1 }}
                        transition={{
                          type: "spring",
                          damping: 70,
                          stiffness: 350,
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                          <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                          <h4 className="text-yellow-700 font-semibold text-sm md:text-base lg:text-lg">
                            10-12 November, 2024
                          </h4>
                        </div>
                      </motion.div>
                      <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
                          Submissions & Publications
                        </button>
                        <button className="border-amber-800 border-2 text-amber-800 px-4 py-2 rounded-md">
                          Important Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide4" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❯
                </a>
                </div>
              </div> */}



              {/* <div id="slide4" className="carousel-item relative w-full h-screen">
                <img
                  src={ku1}
                  className="opacity-90 object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center md:text-end p-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-amber-700 font-semibold p-2">
                      <Typewriter
                      options={{
                        strings: ['WELCOME', 'TO'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </h1>
                    <motion.h1
                      className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-2"
                      initial={{ y: "50px", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      KUCSE Symposium - 2024
                    </motion.h1>
                    <div className="text-white p-2 md:p-5">
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                        Join us at KUCSE-Symposium 2024 for an exciting journey through Competitive Programming, Datathon, CEO Talks,
                      </h3>
                      <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                        and Innovation challenges, where creativity and expertise collide!
                      </h3>
                    </div>
                    <div>
                      <motion.div
                        initial={{ x: "760px", y: "10px", opacity: 0 }}
                        animate={{ x: "760px", y: "0px", opacity: 1 }}
                        transition={{
                          type: "spring",
                          damping: 70,
                          stiffness: 350,
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <div className="flex items-center justify-center md:justify-start space-x-2 p-3">
                          <img src={dateLogo} alt="Date Logo" className="w-6 h-6 md:w-8 md:h-8" />
                          <h4 className="text-yellow-700 font-semibold text-sm md:text-base lg:text-lg">
                            10-12 November, 2024
                          </h4>
                        </div>
                      </motion.div>
                      <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
                          Submissions & Publications
                        </button>
                        <button className="border-amber-800 border-2 text-amber-800 px-4 py-2 rounded-md">
                          Important Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❮
                </a>
                <a href="#slide1" className="text-4xl md:text-6xl btn-circle hidden sm:block">
                  ❯
                </a>
                </div>
              </div> */}

              
          </div>
      </div>
   )
} 
export default Banner;

