import React from "react";
import Card from "../Resusables/Card";
import Button from "../Resusables/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

interface GroupCallCardProps {
  title: string;
  date: string;
  time: string;
  status: "ongoing" | "upcoming";
  participants: number;
  studyGroup: string;
  className?: string;
  backgroundImage?: string | {};
}

const GroupCallCard: React.FC<GroupCallCardProps> = ({
  title,
  date,
  time,
  status,
  participants,
  studyGroup,
  className = "",
  backgroundImage,
}) => {
  const statusBg = status === "ongoing" ? "bg-green-100" : "bg-blue-100";
  const statusText = status === "ongoing" ? "text-green-600" : "text-blue-600";
  const statusDot = status === "ongoing" ? "bg-green-600" : "bg-blue-600";

  return (
    <Card
      className={`shadow-sm bg-gray-50 h-80 space-y-4 p-3 w-52 ${className}`}
    >
      <div
        className="h-26 w-full rounded-lg mb-2 overflow-hidden"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="mb-2 flex items-center">
        <span
          className={`${statusBg} ${statusText} text-xs px-2 py-0.5 rounded-full flex items-center`}
        >
          <span className={`${statusDot} w-2 h-2 rounded-full mr-1`}></span>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <span className="font-medium mt-2 text-gray-500 text-md">{title}</span>

      <div className="flex mt-2 justify-between">
        <div className="mt-2 flex items-center font-bold text-[8px] text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{date}</span>
        </div>

        <div className="mt-1 flex items-center font-bold text-[8px] text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{time}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center text-[10px] text-gray-600">
        <div className="spacey-y-1">
          <p className="text-[8px] mr-2 text-justify text-gray-400">Study Group</p>
          <div className="flex space-x-1">
            <img src="/images/study.jpg" alt="study" className="w-3 h-3 rounded-2xl" />
            <p className="text-[8px] text-justify font-extrabold text-gray-400">UX Strategy Study Group</p>
          </div>
        </div>
        <div className="spacey-y-1 mb-1">
          <p className="text-[8px] ml-4 text-center text-gray-400">Mentors</p>
        </div>
      </div>

      <div className="mt-3 flex justify-between ">
        <Button
          variant="outline"
          size="sm"
          className="flex text-[10px] rounded-md"
        >
          View Participants
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="flex text-[10px] rounded-md"
        >
          Join Now <IoIosArrowRoundForward className="ml-1"/>
        </Button>
      </div>
    </Card>
  );
};

export default GroupCallCard;
