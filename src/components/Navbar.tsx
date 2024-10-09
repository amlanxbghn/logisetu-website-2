"use client";

import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section>
      <nav className="py-3 bg-white/5 border-b border-white/20 backdrop-blur z-50 fixed top-0 left-0 right-0">
        <div className="container px-4 mx-auto">
          <div className="flex items-center relative">
            <a
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-semibold"
              href="#"
            >
              <h1 className=''>LOGISETU</h1>
            </a>

            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="flex w-10 h-10 items-center justify-center bg-white rounded-md"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5ZM2.5 10C2.5 9.72386 2.72386 9.5 3 9.5H17C17.2761 9.5 17.5 9.72386 17.5 10C17.5 10.2761 17.2761 10.5 17 10.5H3C2.72386 10.5 2.5 10.2761 2.5 10ZM3 14.5C2.72386 14.5 2.5 14.7239 2.5 15C2.5 15.2761 2.72386 15.5 3 15.5H17C17.2761 15.5 17.5 15.2761 17.5 15C17.5 14.7239 17.2761 14.5 17 14.5H3Z" fill="#111827" />
                </svg>

              </button>
            </div>

            <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
              <li>
                <a className="nav-item" href="#">
                  Our Mission
                </a>
              </li>
              <li>
                <a className="nav-item" href="#">
                  Advantages
                </a>
              </li>
              <li>
                <a className="nav-item" href="#">
                  Business Model
                </a>
              </li>
              <li>
                <a className="nav-item" href="#">
                  Our Team
                </a>
              </li>
            </ul>
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                <a className="nav-item mr-9" href="#">
                  Sign In
                </a>
                <a
                  className="relative group inline-block py-2.5 px-3 text-sm font-semibold text-black bg-white rounded-md overflow-hidden shadow-lg"
                  href="#"
                >
                  <span className="flex items-center relative">
                    Contact Us
                    <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}>
        <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <div>
            <ul className="mb-2">
              <li>
                <a className="block py-4 px-5 text-black hover:bg-blue-200 rounded-lg" href="#">
                  Our Mission
                </a>
              </li>
              <li>
                <a className="block py-4 px-5 text-black hover:bg-blue-200 rounded-lg" href="#">
                  Advantages
                </a>
              </li>
              <li>
                <a className="block py-4 px-5 text-black hover:bg-blue-200 rounded-lg" href="#">
                  Business Model
                </a>
              </li>
              <li>
                <a className="block py-4 px-5 text-black hover:bg-blue-200 rounded-lg" href="#">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </section>
  );
};

export default Navbar;
