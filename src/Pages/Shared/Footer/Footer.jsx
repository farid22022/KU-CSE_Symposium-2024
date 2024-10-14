import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "./../../../../public/logo/synaery2-removebg-preview.png";


const Footer = () => {
  return (
    <footer className="bg-black mt-52">
      <section className="relative">
        
        <div className="md:container mx-auto grid grid-cols-1 lg:grid-cols-3 text-white py-10 px-6">
          <div>
            <div className="flex flex-col gap-3 mb-6 text-center lg:text-left">
              <div className="mb-4">
                <img
                  className="w-2/12 lg:5/12 mx-auto lg:ml-0"
                  src={logo}
                  alt="Synergy - X Logo"
                />
              </div>
              <p className="font-medium text-lg mb-3">
                Empowering Innovation, Inspiring Excellence
              </p>
              <p className="font-normal text-base text-gray-400">
                We promote the power of ideas and creativity, empowering
                participants to innovate and challenge conventional thinking.
                Our collaborative environment nurtures future leaders and
                visionaries. Join us in celebrating ingenuity and fostering a
                passion for lifelong learning.
              </p>
            </div>
          </div>
          <div className="divider lg:hidden"></div>
          <div className="flex justify-center text-center lg:text-left">
            <div className="mx-auto">
              <h1 className="font-bold text-lg text-[#FFFFFFE6] mb-6">
                Useful Links
              </h1>
              <ul className="font-normal mx-auto text-center text-base text-[#FFFFFF99] space-y-2">
                <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 cursor-pointer p-2 mx-auto lg:ml-0 w-fit rounded-lg">CEO Talk</li>
                <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 cursor-pointer p-2 mx-auto lg:ml-0 w-fit rounded-lg">Competitive Programming</li>
                <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 cursor-pointer p-2 mx-auto lg:ml-0 w-fit rounded-lg">Datathon</li>
                <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 cursor-pointer p-2 mx-auto lg:ml-0 w-fit rounded-lg">Project Showcase</li>
                <li className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 cursor-pointer p-2 mx-auto lg:ml-0 w-fit rounded-lg">Poster Presentation</li>
                <li className="text-gray-300 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 cursor-pointer p-2 mx-auto lg:ml-0 w-fit rounded-lg">
                  Register Now
                </li>
              </ul>
            </div>
          </div>
          <div className="divider lg:hidden"></div>
          <div className="flex justify-center text-center lg:text-left">
            <div className="mx-auto">
              <h1 className="font-bold text-lg text-[#FFFFFFE6] mb-6">Contact Us</h1>
              <ul className="w-fit font-normal mx-auto lg:ml-0 text-base text-[#FFFFFF99] space-y-3">
                <li className="flex items-center gap-3 mb-2">
                  <FaEnvelope className="w-8 h-8" />
                  <a href="mailto:synergyx2024@cseku.ac.bd" className="hover:text-gray-300">synergyx2024@cseku.ac.bd</a>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <FaPhoneAlt className="w-8 h-8" />
                  <a href="tel:+8801719430433" className="hover:text-gray-300">+880 1992-223592, +880 1516-532740</a>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <MdLocationOn className="w-8 h-8" />
                  <span className="grid">
                    <a href="https://www.google.com/maps/place/Computer+Science+Discipline/@22.8028446,89.5321738,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff854946a0f271:0x6688474d42b907c8!8m2!3d22.8028397!4d89.5347487!16s%2Fg%2F11bx0j83mk?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                      <p>CSE Discipline, Khulna University</p>
                      <p>Khulna - 9208</p>
                    </a>
                  </span>
                </li>
                <li>
                  <div className="flex items-center justify-center lg:justify-start gap-4 my-5">
                    <button className="rounded-lg px-3 py-2 text-center w-full bg-gradient-to-r from-orange-500 to-red-500">
                      <a href="https://www.facebook.com/CLUSTER.KU" target="_blank" className="text-white font-semibold">
                      Facebook Page
                    </a>
                    </button>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-400">
                Reach us for immediate assistance or clarification
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between items-center px-6 pb-5 mt-5">
          <p className="text-[#FFFFFF99] text-base">&copy; 2024 SynergyX. All rights reserved.</p>
          <p className="text-[#FFFFFF99] text-base">
            Designed by{' '}
            <span className="text-white">
              Team Synergy -{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                X
              </span>
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
