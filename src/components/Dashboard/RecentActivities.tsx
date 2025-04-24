import React from "react";
import Card from "../Resusables/Card";
import { Activity } from "../../types";
import { LuMenu } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface RecentActivitiesProps {
  activities: Activity[];
  className?: string;
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case "kyc":
      return (
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-yellow-600">
          <img src="/images/jane.jpg" alt="Jane" className="h-8 w-8 rounded-2xl"/>
        </div>
      );
    case "signup":
      return (
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-blue-600">
          <img src="/images/mary.png" alt="Mary" className="h-8 w-8 rounded-2xl"/>
        </div>
      );
    case "withdrawal":
      return (
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
          <img src="/images/sam.jpg" alt="Sam" className="h-8 w-8 rounded-2xl"/>
        </div>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      );
  }
};

const RecentActivities: React.FC<RecentActivitiesProps> = ({
  activities,
  className = "",
}) => {
  return (
    <div className={`bg-white h-94 mb-1 p-3 rounded-md ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <LuMenu />
          <h2 className="text-xs text-gray-400 font-extrabold">
            Recent Activities
          </h2>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-xs mr-2 text-purple-800 hover:underline">
            See all
          </a>
          <HiOutlineDotsVertical />
        </div>
      </div>

      <Card className="p-0">
        {activities.map((activity) => (
          <div key={activity.id} className="py-4 border-b border-gray-200 flex items-center">
            <div className="mb-10">{getActivityIcon(activity.type)}</div>
            <div className="ml-1">
              <h4 className="text-sm font-bold">
                {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}{" "}
                {activity.type === "kyc"
                  ? "Verification"
                  : activity.type === "signup"
                  ? "Sign Up!"
                  : "Request"}
              </h4>
              <p className="text-[11px] flex text-gray-500">{activity.message}</p>
              <p className="text-[11px] text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default RecentActivities;
