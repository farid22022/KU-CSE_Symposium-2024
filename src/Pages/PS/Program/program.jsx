import React, { useState, useEffect } from 'react';

const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // Fetch data from a JSON or API
    fetch("peoples.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  const showDay = (day, event) => {
    event.preventDefault();
    setActiveDay(day);
  };

  return (
    <section className="md:container mx-auto my-5 md:my-8 lg:my-10">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">PROGRAM</h2>
        </div>

        {/* Program Days */}
        <div className="grid grid-cols-4 sm:grid-cols-8 text-white">
          {['9:00 AM-9:50 AM', '10:00 AM-10:45 AM', '10:50 AM-11:35 AM', '11:40 AM-12:25 PM', '12:30 PM-1:15 PM', '2:35 PM-3:20 PM', '3:25 PM-4:10 PM', '4:15 PM-5:00 PM'].map((time, index) => (
            <button
              key={index}
              id={`btn-day-${index + 1}`}
              onClick={(e) => showDay(index + 1, e)}
              className={`py-4 px-6 text-center font-semibold day-btn ${activeDay === index + 1 ? 'bg-red-600' : 'bg-red-500'}`}
            >
              <p className="text-xs mt-1">{time}</p>
            </button>
          ))}
        </div>

        {/* Event Detail */}
        <div className="mt-8">
          {/* Introduction */}
          <div className={`day bg-white mt-8 p-6 border-2 border-gray-400 rounded-lg ${activeDay === 1 ? '' : 'hidden'}`}>
            <h3 className="text-xl font-semibold mb-3">Introduction</h3>
            <p className="text-gray-500">By VC and teachers</p>
          </div>

          {/* Speakers */}
          {persons.map((person, index) => (
            <div
              key={index}
              id={`day-${index + 2}`} // Adjusted for index starting after introduction
              className={`day bg-white mt-8 p-6 border-2 border-gray-400 rounded-lg ${activeDay === index + 2 ? '' : 'hidden'}`}
            >
              <div className="flex items-center text-left">
                {/* Speaker Image */}
                <img
                  src={person.image}
                  className="w-20 h-20 rounded-full mr-4 object-cover"
                  alt={`Speaker: ${person.speaker}`}
                />
                {/* Session Info */}
                <div>
                  <h3 className="w-[90%] text-left text-xl font-semibold mb-3">{person.topic || 'Not Provided'}</h3>
                  <div className="flex items-start justify-center flex-col space-y-2 text-sm text-gray-500">
                    <span className="flex">{person.speaker}</span>
                    <span className="flex">{person.position} at {person.company}</span>
                    <span className="flex">
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        LinkedIn Profile
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
