import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="relative bg-[#3CACAE] py-4 text-white shadow-lg shadow-slate-600 ">
        <div className="text-center mx-10 lg:flex justify-evenly items-center py-5">
          <h2 className="text-3xl ">Yoga And Fitness With Gemini</h2>
          <ul className="mt-5 lg:mt-0 lg:flex lg:justify-center text-xl text-center">
            <Link to="/">
              <li className="underline underline-offset-4 pb-1  lg:mx-11 lg:no-underline hover:underline">
                Home
              </li>
            </Link>
            <Link to="/doYoga">
              <li className=" underline underline-offset-4 pb-1 lg:mx-11 lg:no-underline hover:underline">
                Do yoga with AI
              </li>
            </Link>
            <Link to="/breath">
              <li className="underline underline-offset-4 pb-1  lg:mx-11 lg:no-underline hover:underline">
                Breathing
              </li>
            </Link>
            <Link to="/about">
              <li className="underline underline-offset-4 pb-1  lg:mx-11 lg:no-underline hover:underline">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="underline underline-offset-4 pb-1  lg:mx-11 lg:no-underline hover:underline">
                Contact
              </li>
            </Link>
          </ul>
          <div></div>
        </div>
      </div>
    );
}

export default Header;
