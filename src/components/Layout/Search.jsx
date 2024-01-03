// Search.js
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Search = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000435] bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#0000435] p-4 rounded-md">
        <form>
          {/* Your search form elements go here */}
          <input type="text" placeholder="Search..." className="p-2 border" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          <FaSearch />
          </button>
        </form>
        <button onClick={onClose} className="mt-2 text-gray-500">
        <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Search;
