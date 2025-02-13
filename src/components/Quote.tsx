import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto my-8">
      <p className="text-2xl italic text-gray-800">
        "{text}"
      </p>
      <p className="mt-4 text-gray-600 font-semibold">— {author}</p>
    </div>
  );
};

export default Quote;