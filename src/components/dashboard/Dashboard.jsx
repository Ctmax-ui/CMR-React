import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { PiMoneyBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import VendorLists from "../vendor/VendorLists";

const Dashboard = () => {
  const image =
    "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg";


  return (
    <>
      <div className="border w-[95%] absolute right-0">
        
        <div className="border w-full h-auto p-5 pb-0">
          <div className="flex justify-between">
            <h2 className=" font-bold text-slate-800 text-2xl">
              Customer Overview
            </h2>

            <div className="flex gap-5">
              <button className="border px-4 py-0 rounded-full bg-[#4c44e2] text-white font-semibold flex justify-center items-center gap-2">
                <FiUploadCloud
                  className=""
                  style={{ transform: "rotatey(180deg)" }}
                />{" "}
                Export
              </button>

              <div className="rounded-full w-[50px] h-[50px] relative">
                <span className="absolute  bottom-0 right-0 rounded-full border-white border-[2px]">
                  <span
                    className="w-[10px] block rounded-full h-[10px] bg-green-500"
                    id="userActiveStatus"
                  ></span>
                </span>

                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <ul className="flex items-center gap-2">
            <li className="pb-2 border-b-2 border-transparent cursor-pointer hover:border-[#a39efa] px-4 font-semibold drop-shadow-lg text-slate-700">
              Overview
            </li>
            <li className="pb-2 border-b-2 border-transparent cursor-pointer hover:border-[#a39efa] px-4 font-semibold drop-shadow-lg text-slate-700">
              General
            </li>
            <li className="pb-2 border-b-2 border-transparent cursor-pointer hover:border-[#a39efa] px-4 font-semibold drop-shadow-lg text-slate-700">
              List View
            </li>
            <li className="pb-2 border-b-2 border-transparent cursor-pointer hover:border-[#a39efa] px-4 font-semibold drop-shadow-lg text-slate-700">
              Grid View
            </li>
            <li className="pb-2 border-b-2 cursor-pointer hover:border-[#4c44e1] px-4 border-[#4c44e2] font-semibold drop-shadow-lg text-black">
              Normal View
            </li>
          </ul>
        </div>

        <div className="p-7">
          <div className="flex items-center gap-5">
            <div className="w-1/3 p-5 border-2 rounded-xl shadow-md hover:border-slate-400 transition-all cursor-pointer">
              <div className="flex justify-between px-2">
                <span className="bg-[#eaf0fb] rounded-full p-2">
                  <PiMoneyBold className=" font-bold text-xl text-[#4c44e2]" />
                </span>

                <span>
                  <BsThreeDotsVertical className="text-slate-500" />
                </span>
              </div>

              <div className="pt-4 ">
                <p className="font-semibold">Total Customers</p>
                <div className="flex justify-between pt-2 items-center">
                  <p className=" font-bold text-4xl">21,877</p>

                  <p className="flex font-semibold">
                    <span className="text-green-700 flex items-center me-1">
                      <IoIosTrendingUp className="text-green-500 text-xl me-1" />{" "}
                      18%
                    </span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-5 border-2 rounded-xl shadow-md hover:border-slate-400 transition-all cursor-pointer">
              <div className="flex justify-between px-2">
                <span className="bg-[#eaf0fb] rounded-full p-2">
                  <TbUsersGroup className=" font-bold text-xl text-[#4c44e2]" />
                </span>

                <span>
                  <BsThreeDotsVertical className="text-slate-500" />
                </span>
              </div>

              <div className="pt-4 ">
                <p className="font-semibold">Total Members</p>
                <div className="flex justify-between pt-2 items-center">
                  <p className=" font-bold text-4xl">820</p>

                  <p className="flex font-semibold">
                    <span className="text-red-700 flex items-center me-1">
                      <IoMdTrendingDown className="text-red-500 text-xl me-1" />{" "}
                      -88%
                    </span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-5 border-2 rounded-xl shadow-md hover:border-slate-400 transition-all cursor-pointer">
              <div className="flex justify-between px-2">
                <span className="bg-[#eaf0fb] rounded-full p-2">
                  <MdOutlineRemoveRedEye className=" font-bold text-xl text-[#4c44e2]" />
                </span>

                <span>
                  <BsThreeDotsVertical className="text-slate-500" />
                </span>
              </div>

              <div className="pt-4 ">
                <p className="font-semibold">Active Users</p>
                <div className="flex justify-between pt-2 items-center">
                  <p className=" font-bold text-4xl">28</p>

                  <ul className="flex w-1/2 relative">
                    <li
                      // key={key}
                      className="w-[30px] h-[30px] left-10 top-0  border-2 border-white rounded-full"
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                    <li
                      className={`w-[30px] h-[30px] absolute left-5 top-0  border-2 border-white rounded-full`}
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                    <li
                      className={`w-[30px] h-[30px] absolute left-10 top-0  border-2 border-white rounded-full`}
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                    <li
                      className={`w-[30px] h-[30px] absolute left-14 top-0  border-2 border-white rounded-full`}
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                    <li
                      className={`w-[30px] h-[30px] absolute left-[4.5rem] top-0  border-2 border-white rounded-full`}
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                    <li
                      className={`w-[30px] h-[30px] absolute left-[5.5rem] top-0  border-2 border-white rounded-full`}
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                    <li
                      className={`w-[30px] h-[30px] absolute left-[6.5rem] top-0  border-2 border-white rounded-full`}
                    >
                      <img className="rounded-full h-full w-full" src={image} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <VendorLists />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
