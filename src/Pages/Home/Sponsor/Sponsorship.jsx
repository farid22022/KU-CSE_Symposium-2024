import sponsorLogo1 from "./../../../../public/sponsors/sponsor-1.png";
import sponsorLogo2 from "./../../../../public/sponsors/sponsor-2.png";
import sponsorLogo3 from "./../../../../public/sponsors/sponsor-3.png";

const Sponsorship = () => {
  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-wide text-amber-700  uppercase">
            Proud Sponsors
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Partners for KUCSE Symposium - 2024
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Join the community of sponsors supporting innovation and education.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {/* Sponsor Logos */}
          <div className="flex justify-center">
            <img src={sponsorLogo1} alt="Sponsor 1" className="h-20 w-auto" />
          </div>
          <div className="flex justify-center">
            <img src={sponsorLogo2} alt="Sponsor 2" className="h-20 w-auto" />
          </div>
          <div className="flex justify-center">
            <img src={sponsorLogo3} alt="Sponsor 3" className="h-20 w-auto" />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Want to Become a Sponsor?
          </h3>
          
          <a
            href="/sponsorship-info"
            className="inline-block bg-amber-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-amber-700 transition"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
