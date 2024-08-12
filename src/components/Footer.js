import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Yoga With Gemini. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
