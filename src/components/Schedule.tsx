import React from 'react';

const Schedule = () => {
  
  const schedule = [
    { day: 'Monday', time: '16:30 PM - 18:25 PM', topic: 'WEB PROGRAMMING LECTURE' },
    { day: 'Thursday', time: '16:00 PM - 18:00 PM', topic: 'WEB PROGRAMMING LAB' },
  ];

  return (
    <div className="p-6 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Web Programming Course Schedule
      </h1>
      <div className="max-w-2xl mx-auto">
        {schedule.map((session, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">{session.day}</h2>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Time:</span> {session.time}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Topic:</span> {session.topic}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;