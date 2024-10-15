import React from 'react';

const eventDescription = () => {
    const events = [
        { event: 'Registration', location: 'Online', dateTime: 'TBA' },
        { event: 'Gromming Sessions', location: 'Online', dateTime: 'TBA' },
        { event: 'Preliminary Round', location: 'Online', dateTime: 'TBA' },
        { event: 'Onsite Final Contest', location: 'Khulna University', dateTime: 'TBA' },
    ];

    return (
        <div className="container mx-auto py-10 shadow-xl border-2 border-red-600">
            <h1 className="text-3xl font-bold text-violet-600 text-center mb-6">Event Description</h1>
            <p className="text-center text-gray-700 mb-4">
                📊 Unleash Your Data Science Skills: Join the Nationwide Datathon Competition!
            </p>
            <p className="text-center text-gray-600 mb-4 p-2 mx-auto lg:p-4 lg:w-[80%]">
                <strong>Synergy - <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>X</span> 2024</strong> is an exciting event aimed at fostering collaboration between academia and industry. This symposium will include a Datathon Competition open to universities nationwide. The competition will consist of three key stages, providing participants with opportunities to enhance their skills in data science, machine learning, and AI. Teams for the competition should consist of 3 members, with participants required to be university students. Be sure to review the event guidelines and registration details for more information!
            </p>
            <p className="text-center text-gray-600 mb-4">
                The event will be held in DR. Satyendra Nath Bose Academic Building, KU
            </p>
            <div className="overflow-x-hidden mt-6 w-[70%] mx-auto">
                <table className="min-w-full bg-white border border-gray-300 text-center">
                    <thead>
                        <tr className="bg-violet-600 text-white">
                            <th className="py-2 px-4">Event</th>
                            <th className="py-2 px-4">Location</th>
                            <th className="py-2 px-4">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="py-2 px-4 border">{item.event}</td>
                                <td className="py-2 px-4 border">{item.location}</td>
                                <td className="py-2 px-4 border">{item.dateTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default eventDescription;
