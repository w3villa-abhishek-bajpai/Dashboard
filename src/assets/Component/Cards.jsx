import React from "react";
import img from "../Images/images.jpeg";
import { CiClock2 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-between bg-gray-100 px-4 py-">
      {/* Card Component */}
      {Array(4).fill("").map((_, index) => (
        <div key={index} className="w-full sm:w-[30%] md:w-[30%] lg:w-[24%] p-5 rounded-[20px] shadow-lg bg-white">
          <p className="font-bold flex justify-between ">
            Project Dashboard <BsThreeDotsVertical />
          </p>
          <p className="text-sm py-1 text-gray-500">Created a dashboard design</p>
          <div className="flex justify-between items-center">
            <p className="text-[13px] py-2 flex items-center gap-1">
              <CiClock2 /> Updated 5 hours ago
            </p>

            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User 1" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src={img} alt="User 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
