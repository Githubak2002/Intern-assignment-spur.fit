import React from "react";
import Photo from "../imgs/Photo.png";

const TopBar = () => {
  return (
    <section className="flexBetween w-full">

      {/* --- LEFT --- */}
      <h2 className="text-2xl">Home</h2>

      {/* --- CENTER --- */}
      <div className="text-lg flex bg-gradient-to-r from-[#5f5fff0f] to-[#ff0ace0d] rounded-3xl p-2 w-[380px] translate-x-[25%] ">
        <i className="ri-search-line px-4 text-black bg-transparent" />
        <input
          className="bg-transparent focus:outline-none"
          type="text"
          placeholder="Search anything"
        />
      </div>

      {/* --- RIGHT --- */}
      <div className="flexCenter gap-x-[18px]">
        <i className="ri-notification-line text-xl" />

        <button className="text-white rounded-full bg-gradient hover:cursor-pointer flex py-2 px-3 gap-x-2 text-lg ">
          <i className="ri-chat-3-line" />
          <span>Ask Copilto</span>
        </button>

        <div>
          <img src={Photo} alt="user_photo"  />
        </div>
      </div>

    </section>
  );
};

export default TopBar;
