import { RiHome2Line } from "react-icons/ri";
import { MdOutlineCalendarToday } from "react-icons/md";
import { GoPerson,GoBell  } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";





export const Sidebar = () => {
  return (
    <>
      <nav className="h-screen border-2 fixed left-0 top-0 w-[5%] border-slate-100 z-20">
        <div className="flex flex-col items-center justify-between h-full py-3">
          <ul className="flex flex-col items-center gap-5">

            <li><div className="rounded-full w-[40px] h-[40px] bg-[#4c44e2]  text-white font-bold flex justify-center items-center text-2xl">S</div></li>
            <li>
              <button className="bg-[#f4f6f9] text-2xl p-2 rounded-full">
                <RiHome2Line />
              </button>
            </li>
            <li>
              <button className=" text-2xl p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M4.75 7.5H.5v6h4.25m4.5-9h-4.5v9h4.5m0-13h4.25v13H9.25z"/></svg>
              </button>
            </li>
            <li>
              <button className=" text-2xl p-2 rounded-full">
                <GoPerson />
              </button>
            </li>
            <li>
              <button className=" text-2xl p-2 rounded-full">
                <MdOutlineCalendarToday className="text-slate-700" />
              </button>
            </li>
            <li>
              <button className=" text-2xl p-2 rounded-full">
                <SlEnergy />
              </button>
            </li>
            <li>
              <button className=" text-2xl p-2 rounded-full">
                <GoBell />
              </button>
            </li>

          </ul>

          <ul className="flex items-center flex-col gap-3">
            <li><button className="text-4xl text-slate-800"><IoSettingsOutline className="" /></button></li>
            <li>
              <div className="rounded-full w-[90%] h-[90%] relative">
                <span className="absolute  bottom-0 right-0 rounded-full border-white border-[2px]">
                </span>
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
