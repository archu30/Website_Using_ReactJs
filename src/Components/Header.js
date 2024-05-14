// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-cyan-700 p-4 text-white fixed w-full z-[999]">
      <div className="max-w-[1240px] py-[12px] mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Logo</div>
        {toggle ? (
          <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-3xl md:hidden block" />
        ) : (
          <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-3xl md:hidden block" />
        )}
        <ul className="hidden md:flex space-x-5">
          <li>
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/detail" className="cursor-pointer">
              Detail
            </Link></li>
          <li className="cursor-pointer">
            <Link to="/Contact" className="cursor-pointer">
              Contact Us
            </Link></li>
        </ul>

        {/* responsive menu*/}

        <ul className={`duration-500 md:hidden fixed text-white w-full h-screen bg-black top-[92px]
                    ${toggle ? 'left-0' : 'left-[-100%]'}
                    `}>
          <li className="p-5">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="p-5">
            <Link to="/about" className="cursor-pointer">
              About
            </Link></li>
          <li className="p-5">
            <Link to="/detail" className="cursor-pointer">
              Detail
            </Link></li>
          <li className="p-5">
            <Link to="/Contact" className="cursor-pointer">
              Contact Us
            </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
