import React from "react";
import logo from "../imgs/Logo.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { GoFile } from "react-icons/go";

// remix icons
import 'remixicon/fonts/remixicon.css'

const SideBar = () => {
  return (
    <main className="">
      <img src={logo} alt="logo" className="py-3 border-b-2 flexCenter h-[78px]" />

      <div className="flexStart flex-col h-[240px] gap-y-[48px] mt-10">
        <i className="ri-home-5-line gradient-text text-2xl" />
        <IoChatbubbleEllipsesOutline className="h-6 w-6" />
        <IoBagOutline className="h-6 w-6" />
        <GoFile className="h-6 w-6" />
      </div>

      <i className="absolute bottom-0 mb-10 translate-x-1/2 flexCenter ri-settings-3-line text-2xl" />
    </main>
  );
};

export default SideBar;
