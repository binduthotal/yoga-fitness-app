import React from 'react';

const ErrorComponent = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-100">
        <p className="text-2xl text-gray-700">
          Oops! Something went wrong. Please try again later.
        </p>
        <a href="/" className="mt-4 text-blue-500 underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorComponent;
