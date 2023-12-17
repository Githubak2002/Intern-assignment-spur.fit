import React from 'react'
import {lastcontext2 } from "../constants.js";

import Photo from '../imgs/Photo.png'

const UserPlanDate = () => {
  return (
    <section>
      <div className="flexBetween px-3 h-[44px] border-b-[1.6px] border-gray-200 text-xs">
          
          <h2 className="flexCenter w-[152px]">
          <i className="ri-checkbox-blank-circle-line font-medium" />
          <img className="h-6 w-auto px-2" src={Photo} alt="user_photo" />
          Rahul Last Name</h2>
          {
            lastcontext2.map((heading, index) => (
            <h2 key={index} className={`py-[3px] text-center w-[132px] ${heading.bg == "green" ? "text-green-600 bg-green-200 " : ""} ${heading.bg == "blue" ? "text-blue-600 bg-blue-200 " : ""}`} >{heading.constent}</h2>
            ))
          }
          <i className="ri-chat-3-line py-[3px] text-center w-[132px] gradient-text text-lg font-bold"> <span className="text-xs">৹৹৹</span></i>

        </div>
    </section>
  )
}

export default UserPlanDate