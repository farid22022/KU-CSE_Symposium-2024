import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonCard from "../Shared/PersonCard/PersonCard";

const ImageSlider = ({ persons = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the current slide
  const sliderRef = useRef(null); // Reference to the Slider component

  const settings = {
    dots: false, // Hide default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, // Slide every 2 seconds
    beforeChange: (current, next) => setActiveSlide(next), // Update active slide on change
  };

  const handleThumbnailClick = (index) => {
    setActiveSlide(index); // Update the active slide
    sliderRef.current.slickGoTo(index); // Go to the clicked thumbnail slide
    sliderRef.current.slickPause(); // Pause autoplay

    // Restart autoplay after 3 seconds
    setTimeout(() => {
      sliderRef.current.slickPlay(); // Resume autoplay
    }, 3000); // 3 seconds pause
  };

  const sliderContainerStyle = {
    position: "relative",
    maxWidth: "800px",
    margin: "auto",
  };

  const thumbnailContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    // borderRadius: "0.375rem",
  };

  
  const thumbnailStyle = {
    width: "80px",
    margin: "0 10px",
    cursor: "pointer",
    opacity: "0.6",
    transition: "opacity 0.3s",
    borderRadius: "0.375rem", // Added rounded-md
  };

  const activeThumbnailStyle = {
    ...thumbnailStyle,
    opacity: "1", // Highlight the active thumbnail
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "0 5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: "black", // Change the color of the active dot
  };

  return (
    <div style={sliderContainerStyle}>
      {/* Check if persons has content */}
      {persons.length > 0 ? (
        <>
          {/* Slider with automatic sliding */}
          <Slider {...settings} ref={sliderRef}>
            {persons.map((person, index) => (
              <div key={index}>
                {/* Render PersonCard for each slide */}
                <PersonCard
                  schedule={person.schedule}
                  speaker={person.speaker}
                  company={person.company}
                  topic={person.topic}
                  position={person.position}
                  linkedin={person.linkedin}
                  image={person.image}
                />
              </div>
            ))}
          </Slider>

          {/* Thumbnails */}
          <div style={thumbnailContainerStyle}>
            {persons.map((person, index) => (
              <img
                key={index}
                src={person.image} // Image used as thumbnail
                alt={person.speaker}
                onClick={() => handleThumbnailClick(index)} // Pause and go to clicked thumbnail
                style={index === activeSlide ? activeThumbnailStyle : thumbnailStyle}
              />
            ))}
          </div>

          {/* Dots below thumbnails */}
          <div style={dotsContainerStyle} className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
            {persons.map((_, index) => (
              <div
                key={index}
                style={index === activeSlide ? activeDotStyle : dotStyle}
                onClick={() => handleThumbnailClick(index)} // Allow clicking dots to change slide
                className="cursor-pointer m-1 rounded-full" // Add margin for spacing and rounded dots
              />
            ))}
          </div>



        </>
      ) : (
        <p>.</p> // Show a message if no data is available
      )}
    </div>
  );
};

export default ImageSlider;
