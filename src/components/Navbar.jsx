import React, { useEffect, useState } from "react";
/*import logo from "/logo.png";*/
import { LuPhoneCall } from "react-icons/lu";


const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    };
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.addEventListener('scroll', handleScroll);
    }
  }, [])


  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <details>
          <summary>Blogs</summary>
          <ul className="p-2">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>NewsArticles</a>
            </li>
            <li>
              <a>Youtube</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Digital Marketing</a>
            </li>
            <li>
              <a>Social Media Marketing</a>
            </li>
            <li>
              <a>Training</a>
            </li>
            <li>
              <a>Coaching</a>
            </li>
            <li>
              <a>PR Services</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto  fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
     <div className={`navbar bg-[#F4F8F7] xl:px-24 ${isSticky ? 'shadow-md bg-base-100 transition-all duration-300 ease-in-out' : ''}`}>
        <div className="navbar xl:p">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src="" alt="LOGO" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {/*search button*/}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3 md:flex item-center justify-center hidden "
          >
            {/*search*/}
          </div>
          <a className="btn bg-[#178CC6] rounded-full px-6 text-white flex item-center">
            <LuPhoneCall />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;