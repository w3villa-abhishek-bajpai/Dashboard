import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import img from "../Images/images.jpeg";
import { CiClock2 } from "react-icons/ci";

const Project = () => {
  return (
    <div className="flex  justify-between bg-gray-100 px-6  h-auto rounded-lg shadow-lg ">
      <div className="w-[30%]  rounded-2xl bg-white">
        <div className="w-[95%] text-lg font-semibold text-gray-700 ml-3 mt-3 bg-white">
          Project Summary
        </div>
        <div className="w-[91%] border-2 ml-5 mt-7 rounded-lg p-2 relative">
        <div className="flex ">
        <div className="avatar flex pt-2">
          <div className="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          </div>
          <div className="pl-3 ">
           <div className="flex">
           <div className=""> <p className="">Tiddo App</p>
           <p className="text-[12px]">19 Members</p></div>
           </div>

            <div className="flex justify-end items-center absolute top-5 right-5 "><PiGreaterThan /></div>   
          </div>
          
        </div>
        
         

        <div className="flex  mt-5">
        <div className="avatar flex pt-2">
          <div className="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          </div>
          <div className="pl-3 ">
           <div className="flex">
           <div className=""> <p className="">Homie Saas Application</p>
           <p className="text-[12px]">24 Members</p></div>
           </div>

            <div className="flex justify-end items-center absolute  right-5 top-16 "><PiGreaterThan /></div>   
          </div>
          
        </div>
          
        </div>

        <div className="w-[91%]  ml-5 mt-7 rounded-lg p-2 border-2 relative">
        <div className="flex ">
        <div className="avatar flex pt-2">
          <div className="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          </div>
          <div className="pl-3 ">
           <div className="flex">
           <div className=""> <p className="">Tiddo App</p>
           <p className="text-[12px]">19 Members</p></div>
           </div>

            <div className="flex justify-end items-center absolute top-5 right-5 "><PiGreaterThan /></div>   
          </div>
          
        </div>
        
         

        <div className="flex  mt-5">
        <div className="avatar flex pt-2">
          <div className="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          </div>
          <div className="pl-3  ">
           <div className="flex">
           <div className=""> <p className="">Homie Saas Application</p>
           <p className="text-[12px]">24 Members</p></div>
           </div>

            <div className="flex justify-end items-center absolute  right-5 top-16 "><PiGreaterThan /></div>   
          </div>
          
        </div>
          
        </div>
      </div>


      <div className="w-[30%] border-2 bg-white rounded-2xl p-2">
        {/* Circular Progress Chart */}
        <h3 className="text-lg font-semibold text-gray-700 mt-2 bg-white">
          Project Overview
        </h3>

        {/* Circular Progress Chart */}
        <div className=" flex justify-center items-center pt-16">
          <div className="absolute w-40 h-40 rounded-full border-t-4 border-blue-500 border-r-4 border-gray-200"></div>
          <div className="absolute w-36 h-36 rounded-full border-t-4 border-green-500 border-r-4 border-gray-200"></div>
          <div className="absolute w-32 h-32 rounded-full border-t-4 border-purple-600 border-r-4 border-gray-200"></div>
          <div className="absolute w-28 h-28 rounded-full border-t-4 border-orange-500 border-r-4 border-gray-200"></div>
          <div className="absolute w-24 h-24 rounded-full border-t-4 border-pink-500 border-r-4 border-gray-200"></div>

          <div className=" flex flex-col ">
            <span className="text-2xl font-semibold text-gray-700">65%</span>
            <span className="text-sm text-gray-500">App Design</span>
          </div>
        </div>

        {/* Progress Breakdown */}
        <ul className="space-y-4 mt-10">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="block w-3 h-3 rounded-full bg-purple-600"></span>
              <span className="text-sm text-gray-600">App Design</span>
            </div>
            <span className="text-sm font-medium text-gray-700">65%</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="block w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="text-sm text-gray-600">Development</span>
            </div>
            <span className="text-sm font-medium text-gray-700">20%</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="block w-3 h-3 rounded-full bg-blue-400"></span>
              <span className="text-sm text-gray-600">Research</span>
            </div>
            <span className="text-sm font-medium text-gray-700">15%</span>
          </li>
        </ul> 
      </div>

      <div className="w-[30%]  border-black rounded-2xl bg-white">
        <div className="w-full text-lg font-semibold text-gray-700 ml-3 mt-3">
          Daily Task
        </div>
        <div className="w-[91%] border-2 ml-5 mt-7 mb-4 rounded-lg p-4 bg-white">
                <p className="font-bold flex justify-between">Tido Mobile App Version</p>
                <p className="text-sm py-1 text-gray-500">We have to design a dashboard for<br/>Devine Edge Design Agency</p>
                <div className="flex justify-between ">
                  {" "}
                  <p className="text-[13px] py-2 flex items-center gap-1 mt-2"><CiClock2 /> Updated 2 hours ago</p>
            
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar mr-2">
                      <div className="w-8 ">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8">
                        <img src={img} />
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>

              <div className="w-[91%] border-2  ml-5 mt-7 mb-4 rounded-lg p-4 bg-white">
                <p className="font-bold flex justify-between ">Scrum Call Discussion</p>
                <p className="text-sm py-1 text-gray-500">We have to design a dashboard for<br/>Devine Edge Design Agency</p>
                <div className="flex justify-between ">
                  {" "}
                  <p className="text-[13px] py-2 flex items-center gap-1 mt-2"><CiClock2 /> Updated 2 hours ago</p>
            
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar mr-2">
                      <div className="w-8 ">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-8">
                        <img src={img} />
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>

      </div>
    </div>
  );
};

export default Project;
