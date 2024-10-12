
import CEOs from "../CEOs/CEOs";
import Gallery from "../Gallery/Gallery";

const Overview = () => {
 

  return (
    <div className="pt-6 md:pt-10 text-center space-y-6 md:space-y-8 lg:space-y-12 md:text-center">
      {/* Countdown and Info Section */}
      

      {/* Welcome Section */}
      <div className="px-2 md:px-4 lg:px-8">
        <h2 className="text-4xl md:text-4xl font-bold lg:text-3xl text-yellow-700">
          Welcome to our respected persons
        </h2>
        <p className="text-xs md:text-sm lg:text-lg text-white mt-4 md:mt-6">
          We are privileged to welcome our esteemed speakers for the CEO Talk, who are distinguished leaders in their respective fields. 
          Their insights and experiences will inspire and enrich our audience, fostering a deeper understanding of innovation, leadership, and the future of the tech industry.
        </p>
      </div>

      {/* CEO Section */}
      <Gallery></Gallery>
      <div className="pt-6 md:pt-10 lg:pt-20">
        <CEOs />
      </div>
    </div>
  );
};

export default Overview;
