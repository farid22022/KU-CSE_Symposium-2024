import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "./../../../../public/logo/synaery2-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-12">
      <div className="text-start">
        <img
        className="w-2/12  md:w-1/6 lg:w-1/12 h-1/2" // Increased size for mobile with w-2/12
        src={logo}
        alt="Synergy - X Logo"
      />

        <h2 className="text-2xl font-bold mb-4">Synergy - X</h2>
      </div>
      <hr></hr>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: About Section */}
        <div className="flex flex-col text-center md:text-left">
          <p className="text-sm">
            Empowering Innovation, Inspiring Excellence. We promote the power of ideas and creativity, empowering participants to innovate and challenge conventional thinking. Our collaborative environment nurtures future leaders and visionaries. Join us in celebrating ingenuity and fostering a passion for lifelong learning.
          </p>
        </div>

        {/* Second Column: Useful Links */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="/ps" className="hover:text-gray-300">CEO Talk</a></li>
            <li><a href="/cp" className="hover:text-gray-300">Competitive Programming</a></li>
            <li><a href="/datathon" className="hover:text-gray-300">Datathon</a></li>
            <li><a href="/innovations" className="hover:text-gray-300">Project Showcase</a></li>
            <li><a href="#" className="font-bold text-yellow-300">Register Now</a></li>
          </ul>
        </div>

        {/* Third Column: Contact Info */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-center space-x-2 mb-2 justify-center md:justify-start">
            <FaEnvelope />
            <a href="mailto:synergyx2024@cseku.ac.bd" className="hover:text-gray-300">synergyx2024@cseku.ac.bd</a>
          </div>
          <div className="flex items-center space-x-2 mb-2 justify-center md:justify-start">
            <FaPhoneAlt />
            <a href="tel:+8801719430433" className="hover:text-gray-300">+880 1992-223592,+880 1516-532740</a>
          </div>
          <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
            <MdLocationOn />
            <span className="grid">
              <p>CSE Discipline , Khulna University </p>
              <p> Khulna -9208</p>
            </span>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook className="w-6 h-6" />
            </a>
            {/* <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter className="w-6 h-6" />
            </a> */}
            {/* <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram className="w-6 h-6" />
            </a> */}
            <a href="#" className="text-white hover:text-gray-300">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-teal-400 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">© 2024 SynergyX. All rights reserved.</p>
        <p className="mt-2 text-center md:text-right">Designed by <span className="font-bold">Team Synergy - X</span></p>
      </div>
    </footer>
  );
};

export default Footer;
