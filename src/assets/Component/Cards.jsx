import React from "react";
import img from "../Images/images.jpeg";
import { CiClock2 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Cards = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 shadow-md px-6 py-4 h-auto  relative">
      <div className="w-[23%]  p-5 rounded-[30px] bg-white">
        <p className="font-bold flex justify-between">Project Dashboard <BsThreeDotsVertical /></p>
        <p className="text-sm py-1 text-gray-500">Created a dashboard design</p>
        <div className="flex justify-between ">
          {" "}
          <p className="text-[13px] py-2 flex items-center gap-1"><CiClock2 /> Updated 5 hours ago</p>
          {/* <div className=" flex justify-center items-center">
           <img  src={img}  alt=""  className="w-8 rounded-full object-fill" />
           <img  src={img}  alt=""  className="w-8  rounded-full object-fill" />
</div> */}
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

      <div className="w-[23%]  p-5 rounded-[30px] bg-white">
      <p className="font-bold flex justify-between">Project Dashboard <BsThreeDotsVertical /></p>
        <p className="text-sm py-1 text-gray-500">Created a dashboard design</p>
        <div className="  flex justify-between ">
          {" "}
          <p className="text-[13px] py-2 flex items-center gap-1"><CiClock2 /> Updated 5 hours ago</p>
         
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

      <div className="w-[23%]  p-5 rounded-[30px] bg-white">
      <p className="font-bold flex justify-between">Project Dashboard <BsThreeDotsVertical /></p>
        <p className="text-sm py-1 text-gray-500">Created a dashboard design</p>
        <div className=" flex justify-between ">
          {" "}
          <p className="text-[13px] py-2 flex items-center gap-1"><CiClock2 /> Updated 5 hours ago</p>
         
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

      <div className="w-[23%]  p-5 rounded-[30px] bg-white">
      <p className="font-bold flex justify-between">Project Dashboard <BsThreeDotsVertical /></p>
        <p className="text-sm py-1 text-gray-500">Created a dashboard design</p>
        <div className="flex justify-between ">
          {" "}
          <p className="text-[13px] py-2 flex items-center gap-1"><CiClock2 /> Updated 5 hours ago</p>
        
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
  );
};

export default Cards;
