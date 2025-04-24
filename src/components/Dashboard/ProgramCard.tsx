import React from "react";
import Card from "../Resusables/Card";
import Button from "../Resusables/Button";

interface ProgramCardProps {
  title: string;
  description: string;
  mentors: number;
  tag: "Bootcamp" | "Group Call";
  className?: string;
  backgroundImage?: string | {};
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  mentors,
  tag,
  className = "",
  backgroundImage,
}) => {
  const tagBg = tag === "Group Call" ? "bg-green-100" : "bg-blue-100";
  const tagText = tag === "Group Call" ? "text-green-600" : "text-blue-600";
  const tagDot = tag === "Group Call" ? "bg-green-600" : "bg-blue-600";
  return (
    <Card className={`shadow-sm bg-white ${className}`}>
      <div
        className="relative h-18 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="flex-1 items-center px-4">
          <div className="relative z-10">
            <h3 className="font-bold text-white text-md">{title}</h3>
          </div>
          <div className="mb-2 relative z-10 flex items-center">
            <span
              className={`${tagBg} ${tagText} text-xs px-2 py-0.5 rounded-full flex items-center`}
            >
              <span className={`${tagDot} w-1 h-1 rounded-full mr-1`}></span>
              {tag?.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <p className=" text-left text-[12px] mt-2">{description}</p>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center text-sm">
          <span className="text-gray-700 rounded-full  flex items-center justify-center mr-1">
            <img src="/images/study.jpg" alt="l" className="rounded-2xl w-4 h-4" />
          </span>
          <span className="text-[10px] ">Hosted By: Self</span>
        </div>

        <div className="flex space-x-2">
          <Button className="rounded-xs" variant="outline" size="sm">
            View Details
          </Button>
          <Button className="rounded-xs" variant="primary" size="sm">
            Analysis
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProgramCard;
