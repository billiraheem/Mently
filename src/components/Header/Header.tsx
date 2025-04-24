import React from "react";
import Button from "../Resusables/Button";

interface HeaderProps {
  username: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ username, className = "" }) => {
  return (
    <div className={`bg-purple-800 flex justify-between rounded-md w-[960px] h-20 p-4 ${className}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-white font-bold flex items-center">
              Welcome Aboard, {username}👋 <span className="ml-2"></span>
            </h1>
            <p className="text-md ml-2 text-gray-300 font-bold">
              We're thrilled to have you join Techrity Team!
            </p>
          </div>
          <div className="items-center">
            <Button
              variant="white"
              size="md"
              className="rounded-md font-bold"
            >
              Update Profile
            </Button>
          </div>
    </div>
  );
};

export default Header;
