import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="relative bg-[#3CACAE] py-4 text-white shadow-lg shadow-slate-600 flex justify-evenly items-center">
        <h2 className="text-3xl">Yoga And Fitness</h2>
        <ul className="flex justify-center text-xl items-center">
          <Link to="/">
            <li className="mx-11">Home</li>
          </Link>
          <Link to="/doYoga">
            <li className="mx-11">Do yoga with AI</li>
          </Link>
          <Link to="/about">
            <li className="mx-11">About</li>
          </Link>
          <Link to="/breath">
            <li className="mx-11">Breathing</li>
          </Link>
          <Link to="/contact">
            <li className="mx-11">Contact</li>
          </Link>
        </ul>
        <div></div>
      </div>
    );
}

export default Header;
