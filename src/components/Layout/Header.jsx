import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles"
import { RxCross1 } from "react-icons/rx"
import Navbar from "./Navbar";
import {  IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai"
import  Search  from "./Search";

const Header = ({ activeHeading }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  

  

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
          

      {/* Sticky Header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#fff] h-[70px] border-md`}
        style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
      >
        {/* Header Content */}
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* Categories Dropdown */}
          <div>
          <div>
            <Link to="/about">
              <h1 className="font-bold text-2xl pl-3 text-[#000080] border-b-4 border-yellow-500">ALPHA SNIQUE</h1>
              
            </Link>
          </div>
          </div>
          {/* Navbar */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          {/* Icons (Wishlist, Cart, Profile) */}
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              
            </div>

            <div className={`${styles.noramlFlex}`}>
            <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search for product..."
              value=""
              className="h-[30px] px-2 border-[#3957db] border-b-2 rounded-md"
            />

            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-0.7 cursor-pointer justify-center items-center"
            />
          </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                
              </div>
            </div>

          </div>
        </div>
      </div>



      {/* Mobile Header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <h1 className="font-bold  text-2xl pl-3 text-[#000080] text-center border-b-4 border-yellow-500">ALPHA SNIQUE</h1>
              
            </Link>
          </div>

          <div>
      {/* Your other components go here */}
      <button onClick={openSearch} className="bg-blue-500 text-white p-2 rounded-md">
      <AiOutlineSearch />
      </button>

      {isSearchOpen && <Search onClose={closeSearch} />}
    </div>

          <div>
            
          </div>
          
        </div>

        {/* Header Sidebar */}
        {open && (
          <div
          className={`fixed w-[70%] bg-[#0000005f] z-20 h-full top-0  left-0`}
          
        >
            <div className="fixed w-[70%] h-screen top-0 left-0 z-10 overflow-y-scroll bg-opacity-50 backdrop-filter backdrop-blur-md">
              <div className="w-full justify-between flex pr-3">
                <div>
                  
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              

              <Navbar active={activeHeading} />
              <div className="bg-[#000435]  ml-12 w-[170px] h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer">
                <Link to="tel:+254705806889">
                  <h5 className="text-[#fff] flex text-[15px]">+254705806889 <IoIosArrowForward /></h5>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
              
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
