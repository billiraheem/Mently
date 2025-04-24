import React from "react";
import Card from "../Resusables/Card";
import Button from "../Resusables/Button";
import { Mentor } from "../../types";
import { LuMenu } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiPlusCircle, PiPlusCircleThin } from "react-icons/pi";

interface MentorsProps {
  mentors: Mentor[];
  className?: string;
}

const Mentors: React.FC<MentorsProps> = ({ mentors, className = "" }) => {
  return (
    <div className={`bg-white p-2 rounded-md ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <LuMenu />
          <h2 className="text-md text-gray-400 font-extrabold">Mentors</h2>
        </div>
        <div className="flex items-center">
          <button className="w-6 h-6 flex items-center justify-center mr-2">
            <PiPlusCircleThin color="gray" className="h-8 w-8" />
          </button>
          <HiOutlineDotsVertical />
        </div>
      </div>

      <Card className="p-4">
        {mentors.map((mentor, index) => (
          <div
            key={mentor.id}
            className={`flex py-2 border-b border-gray-300 items-center justify-between ${
              index > 0 ? "mt-4" : ""
            }`}
          >
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                {mentor?.name?.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{mentor.name}</p>
                <p className="text-xs text-gray-500">{mentor.role}</p>
              </div>
            </div>
            <Button variant="primary" size="sm" className="rounded-2xl">
              Message
            </Button>
          </div>
        ))}

        <div className="mt-6">
          <Button
            variant="plain"
            size="md"
            fullWidth
            className="bg-purple-200 rounded-2xl font-bold text-purple-800"
          >
            See all
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Mentors;
