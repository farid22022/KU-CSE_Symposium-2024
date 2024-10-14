import sponsorLogo1 from "./../../../../public/sponsors/sponsor-1.png";
import sponsorLogo2 from "./../../../../public/sponsors/sponsor-2.png";
import sponsorLogo3 from "./../../../../public/sponsors/sponsor-3.png";
import sponsorLogo4 from "./../../../../public/sponsors/sponsor-4.png";

import React, { useEffect, useRef } from 'react';

const Sponsorship = () => {
  const carouselRef = useRef(null);
  const currentIndex = useRef(0);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const itemWidth = items[0].offsetWidth + 16; // Adjust for spacing

    // Function to auto-slide the carousel
    const startAutoSlide = () => {
      if (!autoSlideInterval.current) {
        autoSlideInterval.current = setInterval(() => {
          currentIndex.current += 1;

          // If we've reached the last item, scroll back to the first item
          if (currentIndex.current >= totalItems) {
            currentIndex.current = 0;
            carousel.scrollTo({
              left: 0,
              behavior: 'auto',
            });
          } else {
            carousel.scrollBy({
              left: itemWidth,
              behavior: 'smooth',
            });
          }
        }, 1000); // Change every 3 seconds
      }
    };

    // Function to stop auto-slide
    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    };

    // Intersection Observer to detect when the carousel enters the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoSlide(); // Start sliding when the carousel enters the viewport
        } else {
          stopAutoSlide(); // Stop sliding when the carousel leaves the viewport
        }
      });
    });

    if (carousel) {
      observer.observe(carousel); // Observe the carousel
    }

    // Clean up on component unmount
    return () => {
      observer.disconnect();
      stopAutoSlide();
    };
  }, []);

  return (
    <div className="container mx-auto rounded-lg px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className="carousel w-full rounded-box space-x-4 p-4 auto-slide-carousel"
          ref={carouselRef}
        >
          <div className="carousel-item bg-white rounded-lg p-5" id="item-1">
            <img src={sponsorLogo1} className="rounded-box" alt="Sponsor 1" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-2">
            <img src={sponsorLogo2} className="rounded-box" alt="Sponsor 2" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-3">
            <img src={sponsorLogo3} className="rounded-box" alt="Sponsor 3" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo4} className="rounded-box" alt="Sponsor 4" />
          </div>
          <div className="carousel-item bg-white rounded-lg p-5" id="item-4">
            <img src={sponsorLogo1} className="rounded-box" alt="Sponsor 4" />
          </div>
      </div>
      <div className="flex flex-col text-black lg:flex-row items-center justify-center gap-4 mt-5">
        <h1 className="font-semibold text-center text-xl">
          Want to sponsor Synergy- <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text font-bold">X</span> 2024?
        </h1>
        <button className="bg-gradient-to-r text-white from-orange-500 to-red-500 px-2 py-1 hover:bg-btnHover rounded-lg font-semibold text-lg">
          Become a Sponsor
        </button>
      </div>
    </div>
  );
};

export default Sponsorship;
