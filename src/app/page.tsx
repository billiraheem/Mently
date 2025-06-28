"use client";

import React from "react";
import DashboardLayout from "@/components/Dashboard/Dashboard";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/SideBar";
import Applications from "@/components/Dashboard/Applications";
import GroupCallCard from "@/components/Dashboard/GroupCallCard";
import Mentors from "@/components/Dashboard/Mentors";
import ProgramCard from "@/components/Dashboard/ProgramCard";
import RecentActivities from "@/components/Dashboard/RecentActivities";
import UserStatsChart from "@/components/Dashboard/UsersStats";
import { userStats } from "@/data/dummyUsersStats";
import { applications } from "@/data/dummyApplications";
import { activities } from "@/data/dummyActivities";
import { mentors } from "@/data/dummyMentors";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuMenu } from "react-icons/lu";
import { PiBell } from "react-icons/pi";
import { MdOutlineHandshake } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@/components/Resusables/Button";
import { CiImageOn } from "react-icons/ci";
import { RiListCheck2 } from "react-icons/ri";

const pCard1 = "/images/pCard1.jpg";
const pCard2 = "/images/pCard2.jpg";
const gCard1 = "/images/gCard1.jpg";
const gCard2 = "/images/gCard2.jpg";
const handshake = ""

export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <div className="flex bg-white mb-2 py-4 shadow-md min-w-screen w-60 right-10 bg-gray-100">
          <div className="flex space-x-2 items-center ml-188">
            <PiBell className="w-7 h-7" />
            <div className="flex space-x-2 items-center">
              <div className="bg-purple-400 py-2 px-2 rounded-3xl">
                <img src="/images/handshake.png" alt="logo2" className="w-6 h-6"/>
              </div>
              <div>
                <p className="text-[14px]">Techrity Foun..</p>
                <p  className="text-[12px] text-gray-400">Member</p>
              </div>
              <div>
                <Button variant="plain" className="bg-purple-800 w-11 rounded-2xl"><IoIosArrowDown size={20}/></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-190 py-4">
          <div className="flex items-center justify-between space-x-2">
            <RiListCheck2 color="gray" className="w-7 h-7"/>
            <CiImageOn color="purple" className="bg-purple-200 border border-purple-400 rounded-xs w-7 h-7"/>
          </div>
          <div>
            <p className="font-bold">Manage Widgets</p>
          </div>
        </div>
        <Header username="Blessing" className="mb-6 ml-6" />
        <div className="px-6 pb-6">
          <div className="flex space-x-4">
            <div>
              {/* Programs Section */}
              <div className="mb-4 bg-white rounded-lg p-2 w-[300px]">
                <div className="flex items-center p-2 justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <LuMenu />
                    <h2 className="text-md text-gray-400 font-extrabold">
                      Programs
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <a
                        href="#"
                        className="text-sm mr-2 text-purple-800 hover:underline"
                      >
                        See all
                      </a>
                    </div>
                    <HiOutlineDotsVertical />
                  </div>
                </div>
                <div className="flex items-center ml-36 mb-4">
                  <label className="text-sm mr-2">Filter:</label>
                  <div className="relative flex">
                    <select className="appearance-none border border-gray-300 rounded-md py-1 pl-3 pr-8 bg-white focus:outline-none focus:ring-2 focus:ring-purple-800 text-sm">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="all">All</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <ProgramCard
                    title="Fundamentals of User Interface & Experience"
                    description="This program is a hands-on guide designed for designers who want to master theory and confidently apply it to their designs. This practical approach..."
                    mentors={3}
                    tag="Bootcamp"
                    className="p-4"
                    backgroundImage={pCard1}
                  />

                  <ProgramCard
                    title="Colour Hack Practical Group Call"
                    description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach..."
                    mentors={1}
                    tag="Group Call"
                    className="p-4"
                    backgroundImage={pCard2}
                  />

                  <ProgramCard
                    title="Colour Hack Practical Group Call"
                    description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach..."
                    mentors={1}
                    tag="Group Call"
                    className="p-4"
                    backgroundImage={pCard2}
                  />
                </div>
              </div>
              <div>
                <UserStatsChart stats={userStats} className="w-[300px]" />
              </div>
            </div>
            <div>
              {/* Group Calls Section */}
              <div className="bg-white h-100 rounded-md p-2 mb-6">
                <div className="flex items-center p-2 justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <LuMenu />
                    <h2 className="text-md text-gray-400 font-extrabold">
                      Group Calls
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-md mr-2 text-purple-800 hover:underline"
                    >
                      See all
                    </a>
                    <HiOutlineDotsVertical />
                  </div>
                </div>
                <div className="flex space-x-2 rounded-md ">
                  <GroupCallCard
                    title="Weekly Meeting - Product Demo Review with Testers"
                    date="Wed, Jul 03, 2024"
                    time="9:00 - 11:00AM"
                    status="ongoing"
                    participants={8}
                    studyGroup="Strategic Study group"
                    backgroundImage={pCard2}
                  />

                  <GroupCallCard
                    title="Weekly Meeting - Product Demo Review with Testers"
                    date="Mon, Jul 05, 2024"
                    time="9:00 - 11:00AM"
                    status="upcoming"
                    participants={8}
                    studyGroup="Strategic Study group"
                    backgroundImage={gCard1}
                  />

                  <GroupCallCard
                    title="Weekly Meeting - Product Demo Review with Testers"
                    date="Mon, Jul 05, 2024"
                    time="9:00 - 11:00AM"
                    status="ongoing"
                    participants={8}
                    studyGroup="Strategic Study group"
                    backgroundImage={gCard2}
                  />
                </div>
              </div>
              {/* Lower Section - Mentors, and Recent Activities */}
              <div className="flex space-x-3">
                {/* Applications and User Stats */}
                <div className="">
                  <Applications mentors={applications} className="" />
                </div>

                {/* Mentors and Recent Activities */}
                <div className="space-y-6">
                  <Mentors mentors={mentors} />

                  <RecentActivities activities={activities} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
