import React from "react";
import { SideData } from "../../Data/Data";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-64 md:w-64 sm:w-20 collapsed w-32 h-full rounded-l-xl bg-white border-r border-gray-200 p-5 flex flex-col">
      
      {/* Logo / Title */}
      <h1 className="md:text-xl text-[16px] font-semibold mb-8 text-gray-700">
        EduLive Dashboard
      </h1>

      {/* Nav items */}
      <ul className="space-y-4">
        {SideData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition ${
                  isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
                }`
              }
            >
              <span className="text-gray-600">{item.icon}</span>
              <span className="text-gray-700 md:block hidden">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom Section */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">v1.0.0</p>
      </div>
    </div>
  );
}

export default SideBar;
