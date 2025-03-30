"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="bg-gray-200 p-4 w-32 sm:w-64 fixed h-full z-10 transition-transform -translate-x-full duration-300 ease-in-out">
      {/* Hamburger menu for small screens */}
      <button
        className="sm:block p-2 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        {/* Hamburger icon (you can replace this with an actual icon) */}
        ☰
      </button>

      {/* Sidebar content (conditionally rendered on small screens) */}
      <div className={`w-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out sm:block sm:translate-x-0 hidden`}>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
