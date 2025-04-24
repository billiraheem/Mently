import React from "react";
import Card from "../Resusables/Card";
import Button from "../Resusables/Button";
import { Mentor } from "../../types";
import { LuMenu } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Image from "next/image";

interface ApplicationsProps {
  mentors: Mentor[];
  className?: string;
}

const Applications: React.FC<ApplicationsProps> = ({
  mentors,
  className = "",
}) => {
  return (
    <div className={`bg-white h-170 px-2 py-4 rounded-md ${className}`}>
      <div className="flex items-center px-2 justify-between mb-4">
        <div className="flex items-center space-x-2">
          <LuMenu />
          <h2 className="text-md text-gray-400 font-extrabold">Applications</h2>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-md mr-2 text-purple-800 hover:underline">
            See all
          </a>
          <HiOutlineDotsVertical />
        </div>
      </div>

      <Card className="p-0">
        <div className="p-2 ">
          <h3 className="text-sm text-gray-400 font-medium">Mentors</h3>
        </div>

        <div className="px-2 py-6 border-b border-gray-200 space-y-4">
          <div className=" flex items-center justify-between">
            <div className="flex items-center">
              <MdCheckBoxOutlineBlank color="gray" className="mr-4" />
              <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src={mentors[0]?.pic as string}
                  alt="dp"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="ml-3 mb-1">
                <p className="text-sm font-medium">{mentors[0].name}</p>
                <p className="text-xs text-gray-500">{mentors[0].email}</p>
              </div>
            </div>
            <div className="flex space-x-3 ml-2">
              <Button variant="secondary" size="sm" className="rounded-md">
                Reject
              </Button>
              <Button variant="primary" size="sm" className="rounded-md">
                Accept
              </Button>
            </div>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="plain"
              className="bg-purple-200 border border-purple-300 rounded-md text-purple-500 text-[7px] h-5 "
            >
              Product Designer
            </Button>
            <Button
              variant="plain"
              className="bg-green-100 border border-green-200 rounded-md text-green-400 text-[7px] h-5 "
            >
              4years of experience
            </Button>
            <Button
              variant="plain"
              className="bg-blue-100 border border-blue-200 rounded-md text-blue-400 text-[7px] h-5 "
            >
              Lagos, Nigeria
            </Button>
            <Button
              variant="plain"
              className="bg-gray-200 border border-gray-300 rounded-md text-gray-400 font-bold text-[7px] h-5 "
            >
              GMT +1
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <div className="p-2">
            <h3 className="text-sm text-gray-400 font-medium">Students</h3>
          </div>

          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="px-2 py-6 border-b border-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center">
                <MdCheckBoxOutlineBlank color="gray" className="mr-4" />
                <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                  src={mentor?.pic as string}
                  alt="dp"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                </div>
                <div className="ml-3 mb-1">
                  <p className="text-sm font-medium">{mentor.name}</p>
                  <p className="text-xs text-gray-500">{mentor.email}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm" className="rounded-md">
                  Reject
                </Button>
                <Button variant="primary" size="sm" className="rounded-md">
                  Accept
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Applications;
