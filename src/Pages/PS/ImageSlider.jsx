// import { useState, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import PersonCard from "../Shared/PersonCard/PersonCard";

// const ImageSlider = ({ persons = [] }) => {
//   const [activeSlide, setActiveSlide] = useState(0); // State to track the current slide
//   const sliderRef = useRef(null); // Reference to the Slider component

//   const settings = {
//     dots: false, // Hide default dots
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000, // Slide every 2 seconds
//     beforeChange: (current, next) => setActiveSlide(next), // Update active slide on change
//   };

//   const handleThumbnailClick = (index) => {
//     setActiveSlide(index); // Update the active slide
//     sliderRef.current.slickGoTo(index); // Go to the clicked thumbnail slide
//     sliderRef.current.slickPause(); // Pause autoplay

//     // Restart autoplay after 3 seconds
//     setTimeout(() => {
//       sliderRef.current.slickPlay(); // Resume autoplay
//     }, 3000); // 3 seconds pause
//   };

//   const sliderContainerStyle = {
//     position: "relative",
//     maxWidth: "800px",
//     margin: "auto",
//   };

//   const thumbnailContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//     // borderRadius: "0.375rem",
//   };


//   const thumbnailStyle = {
//     width: "80px",
//     margin: "0 10px",
//     cursor: "pointer",
//     opacity: "0.6",
//     transition: "opacity 0.3s",
//     borderRadius: "0.375rem", // Added rounded-md
//   };

//   const activeThumbnailStyle = {
//     ...thumbnailStyle,
//     opacity: "1", // Highlight the active thumbnail
//   };

//   const dotsContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "10px",
//   };

//   const dotStyle = {
//     width: "10px",
//     height: "10px",
//     borderRadius: "50%",
//     backgroundColor: "gray",
//     margin: "0 5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   };

//   const activeDotStyle = {
//     ...dotStyle,
//     backgroundColor: "black", // Change the color of the active dot
//   };

//   return (
//     <div style={sliderContainerStyle}>
//       {/* Check if persons has content */}
//       {persons.length > 0 ? (
//         <>
//           {/* Slider with automatic sliding */}
//           <Slider {...settings} ref={sliderRef}>
//             {persons.map((person, index) => (
//               <div key={index}>
//                 {/* Render PersonCard for each slide */}
//                 <PersonCard
//                   schedule={person.schedule}
//                   speaker={person.speaker}
//                   company={person.company}
//                   topic={person.topic}
//                   position={person.position}
//                   linkedin={person.linkedin}
//                   image={person.image}
//                 />
//               </div>
//             ))}
//           </Slider>

//           {/* Thumbnails */}
//           {/* <div style={thumbnailContainerStyle}>
//             {persons.map((person, index) => (
//               <img
//                 key={index}
//                 src={person.image} // Image used as thumbnail
//                 alt={person.speaker}
//                 onClick={() => handleThumbnailClick(index)} // Pause and go to clicked thumbnail
//                 style={index === activeSlide ? activeThumbnailStyle : thumbnailStyle}
//               />
//             ))}
//           </div> */}

//           {/* Dots below thumbnails */}
//           {/* <div style={dotsContainerStyle} className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
//             {persons.map((_, index) => (
//               <div
//                 key={index}
//                 style={index === activeSlide ? activeDotStyle : dotStyle}
//                 onClick={() => handleThumbnailClick(index)} // Allow clicking dots to change slide
//                 className="cursor-pointer m-1 rounded-full" // Add margin for spacing and rounded dots
//               />
//             ))}
//           </div> */}
//         </>
//       ) : (
//         <p>.</p> // Show a message if no data is available
//       )}
//     </div>
//   );
// };

// export default ImageSlider;
// //


// import React, { useEffect, useState } from 'react';

// const SpeakerSlider = () => {
//   const [speakers, setSpeakers] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Fetch the speakers data from the API
//     fetch("peoples.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setSpeakers(data);
//         setCurrentIndex(0); // Reset currentIndex when data is loaded
//       });

//     // Automatically change slide every 1.5 seconds, but only if speakers exist
//     let interval;
//     if (speakers.length > 0) {
//       interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
//       }, 3000);
//     }

//     // Clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [speakers.length]);

//   if (!speakers.length) return <p>Loading speakers...</p>;

//   const { image, speaker, position, company, topic, schedule, linkedin } = speakers[currentIndex];

//   return (
//     <div className="mx-auto w-full px-4 py-8">
//       
//       <div className="card max-w-xs sm:max-w-md md:max-w-lg shadow-2xl shadow-black mx-auto my-4">
//         <figure>
//           <img
//             className="w-2/3 p-1 md:w-1/2 mx-auto rounded-full object-cover"
//             src={image}
//             alt={speaker}
//           />
//         </figure>
//         <div className="card-body bg-slate-900 rounded-b-xl text-start p-4">
//           <h2 className="card-title text-yellow-700 text-lg md:text-xl">{speaker}</h2>
//           <p className="text-base md:text-sm">
//             <strong className="font-bold text-white text-xl">{position}</strong>
//           </p>
//           <p className="text-base md:text-sm">
//             <strong className="font-bold text-black badge-info p-1 rounded-md">{company}</strong>
//           </p>
//           <p className="text-base md:text-lg text-white">
//             <span className="text-yellow-500">Topic: </span>
//             {topic || 'Not Provided'}
//           </p>
//           <p className="text-base md:text-lg text-white">
//             <strong className="font-bold text-yellow-500">Schedule:</strong> {schedule}
//           </p>
//           <div className="card-actions justify-end">
//             {linkedin ? (
//               <a
//                 href={linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="btn btn-primary">View LinkedIn</button>
//               </a>
//             ) : (
//               <button className="btn btn-primary" disabled>Coming Soon</button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpeakerSlider;

import React, { useEffect, useState } from 'react';

const SpeakerSlider = () => {
  const [speakers, setSpeakers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the speakers data from the API
    fetch("peoples.json")
      .then((res) => res.json())
      .then((data) => {
        setSpeakers(data);
        setCurrentIndex(0); // Reset currentIndex when data is loaded
      });

    // Automatically change slide every 1.5 seconds, but only if speakers exist
    let interval;
    if (speakers.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
      }, 2000);
    }

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [speakers.length]);

  if (!speakers.length) return <p>Loading speakers...</p>;

  const { image, speaker, position, company, topic, schedule, linkedin } = speakers[currentIndex];

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto w-full px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Speakers</h2>
      </div>
      <div className="card max-w-xs sm:max-w-md md:max-w-lg shadow-black mx-auto my-4">
        <figure className='shadow-2xl'>
          <img
            className="w-2/3 p-1 mx-auto rounded-full object-cover"
            src={image}
            alt={speaker}
          />
        </figure>
        <div className="card-body bg-slate-900 rounded-b-xl text-start p-4">
          <h2 className="card-title text-yellow-700 text-lg md:text-xl">{speaker}</h2>
          <p className="text-base md:text-sm">
            <strong className="font-bold text-white text-xl">{position}</strong>
          </p>
          <p className="text-base md:text-sm">
            <strong className="font-bold text-black badge-info p-1 rounded-md">{company}</strong>
          </p>
          <div className="card-actions justify-end">
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg">View LinkedIn</button>
              </a>
            ) : (
              <button className="btn btn-primary" disabled>Coming Soon</button>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Row */}
      <div className="flex justify-center flex-wrap gap-2 mt-4 bg-white">
        {speakers.map((speakerData, index) => (
          <div
            key={index}
            className={`thumbnail w-16 h-16 rounded-full mx-2 border-4 cursor-pointer ${index === currentIndex ? 'border-yellow-500' : 'border-gray-300'
              }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={speakerData.image}
              alt={speakerData.speaker}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerSlider;
