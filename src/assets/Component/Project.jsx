import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import img from "../Images/images.jpeg";
import { CiClock2 } from "react-icons/ci";

const Project = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-between bg-gray-100 px-4 py-1 rounded-lg  ">
      {/* Project Summary */}
      <div className="w-[99%] lg:w-[32%] rounded-2xl shadow-lg bg-white p-4">
        <h3 className="text-lg font-semibold text-gray-700">Project Summary</h3>

        {/* Project Card 1 */}
        <div className="w-[91%] border-2 mx-auto mt-5 rounded-lg p-2 relative">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="pl-3">
              <p className="font-medium">Tiddo App</p>
              <p className="text-[12px] text-gray-500">19 Members</p> 
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <PiGreaterThan />
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="w-[91%] border-2 mx-auto mt-5 rounded-lg p-2 relative">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="pl-3">
              <p className="font-medium">Tiddo App</p>
              <p className="text-[12px] text-gray-500">19 Members</p>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <PiGreaterThan />
          </div>
        </div>

        <div className="w-[91%] border-2 mx-auto mt-5 rounded-lg p-2 relative">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="pl-3">
              <p className="font-medium">Tiddo App</p>
              <p className="text-[12px] text-gray-500">19 Members</p>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <PiGreaterThan />
          </div>
        </div>
        <div className="w-[91%] border-2 mx-auto mt-5 rounded-lg p-2 relative">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="pl-3">
              <p className="font-medium">Tiddo App</p>
              <p className="text-[12px] text-gray-500">19 Members</p>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <PiGreaterThan />
          </div>
        </div>
      </div>

      

      {/* Project Overview */}
      <div className="w-full sm:w-[80%] md:w-[99%] lg:w-[33%] border-2 bg-white rounded-2xl p-4 shadow-lg">
  {/* Project Overview */}
  <h3 className="text-lg font-semibold text-gray-700 mt-2 text-center sm:text-left">
    Project Overview
  </h3>

  {/* Circular Progress Chart */}
  <div className="relative flex justify-center items-center pt-12 sm:pt-16">
    {/* Progress Circles with Gradient Effect */}
    <div className="absolute w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 rounded-full border-4 border-t-4 border-blue-500 border-r-4 border-gray-200 animate-spin duration-1000 ease-in-out"></div>
    <div className="absolute w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 rounded-full border-4 border-t-4 border-green-500 border-r-4 border-gray-200 animate-spin duration-1000 ease-in-out"></div>
    <div className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full border-4 border-t-4 border-purple-600 border-r-4 border-gray-200 animate-spin duration-1000 ease-in-out"></div>
    <div className="absolute w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full border-4 border-t-4 border-orange-500 border-r-4 border-gray-200 animate-spin duration-1000 ease-in-out"></div>
    <div className="absolute w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border-4 border-t-4 border-pink-500 border-r-4 border-gray-200 animate-spin duration-1000 ease-in-out"></div>

    {/* Percentage Text */}
    <div className="flex flex-col items-center justify-center z-10">
      <span className="text-xl sm:text-2xl font-semibold text-gray-700">65%</span>
      <span className="text-xs sm:text-sm text-gray-500">App Design</span>
    </div>
  </div>

  {/* Add Margin Between Chart and Progress Breakdown */}
  <div className="pt-10 sm:pt-12"></div>

  {/* Progress Breakdown */}
  <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-7">
    <li className="flex items-center justify-between text-xs sm:text-sm">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="block w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-purple-600"></span>
        <span className="text-gray-600">App Design</span>
      </div>
      <span className="font-medium text-gray-700">65%</span>
    </li>
    <li className="flex items-center justify-between text-xs sm:text-sm">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="block w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-orange-500"></span>
        <span className="text-gray-600">Development</span>
      </div>
      <span className="font-medium text-gray-700">20%</span>
    </li>
    <li className="flex items-center justify-between text-xs sm:text-sm">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="block w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-400"></span>
        <span className="text-gray-600">Research</span>
      </div>
      <span className="font-medium text-gray-700">15%</span>
    </li>
  </ul>
</div>


      {/* Daily Task */}
      <div className="w-full lg:w-[32%] border-2 rounded-2xl bg-white shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-700">Daily Task</h3>
        <div className="w-[91%] border-2 mx-auto mt-5 rounded-lg p-4">
          <p className="font-bold">Tido Mobile App Version</p>
          <p className="text-sm py-1 text-gray-500">
            We have to design a dashboard for Devine Edge Design Agency
          </p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-[13px] flex items-center gap-1 text-gray-500">
              <CiClock2 /> Updated 2 hours ago
            </p>
            <div className="flex -space-x-3">
              <img className="w-8 rounded-full border" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              <img className="w-8 rounded-full border" src={img} />
            </div>
          </div>
        </div>
        <div className="w-[91%] border-2 mx-auto mt-5 rounded-lg p-4">
          <p className="font-bold">Tido Mobile App Version</p>
          <p className="text-sm py-1 text-gray-500">
            We have to design a dashboard for Devine Edge Design Agency
          </p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-[13px] flex items-center gap-1 text-gray-500">
              <CiClock2 /> Updated 2 hours ago
            </p>
            <div className="flex -space-x-3">
              <img className="w-8 rounded-full border" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              <img className="w-8 rounded-full border" src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
