import React from 'react'
import { midcontent } from "../constants.js";
import UserPlanDate from './UserPlanDate.jsx';

const UserTableContent = () => {
  return (
    <section>
      

      {/* --- top --- */}
      <div className="flexBetween px-6">
        
        <div className="flexCenter gap-x-4 h-[76px]">
          <h2 className="borderCSS flexCenter gap-2 py-2">Active
          <span className="rounded-md bg-gradient-to-r from-[#5f5fff0f] to-[#ff0ace0d] p-1"> 16</span>
          </h2>

          <h2 className="flexCenter gap-2 py-2 ">Pending
          <span className="rounded-md p-1 bg-[#F2F2F2]"> 16</span>
          </h2>

          <h2 className="flexCenter gap-2 py-2 ">Achived
          <span className="rounded-md p-1 bg-[#F2F2F2]"> 16</span>
          </h2>

        </div>

        <div className="flexCenter gap-x-4 h-8">
          <button className="flexCenter gap-2 px-3 py-2 rounded-full bg-gradient text-white">
          <i className="ri-add-circle-line" />
            Add New
          </button>

          <div className="text-md flex  rounded-3xl p-2 w-[193px] bg-[#F2F2F2]">
            <i className="ri-search-line px-2 gradient-text bg-transparent" />
            <input
            className="bg-transparent   focus:outline-none"
            type="text"
            placeholder="Search anything"
            />
          </div>

          <button className="flexCenter gap-x-1 gradient-text border-[1.8px] border-[#892be2f8] rounded-full p-2">
            <i className="ri-filter-line" />
            Filter by 
            <i className="ri-arrow-down-s-line" />

          </button>
        </div>
      </div>


      {/* --- mid -- */}
      <div className="flexBetween px-3 h-[44px] bg-[#F3F3F3] font-semibold text-xs">
        
        <h2 className="w-[152px]">
        <i className="ri-checkbox-blank-circle-line pr-2 font-medium" />
        Trainee
        <i className="ri-arrow-up-line pl-2 font-medium" />
        </h2>
        {
          midcontent.map((heading, index) => (
          <h2 key={index} className="text-center w-[132px]">{heading}</h2>
          ))
        }

      </div>


      {/* --- last -- */}
      <UserPlanDate />
      <UserPlanDate />
      <UserPlanDate />
      <UserPlanDate />
      <UserPlanDate />
      <UserPlanDate />
      <UserPlanDate />
      <UserPlanDate />


    </section>
  )
}

export default UserTableContent