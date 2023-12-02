import React from "react";
import { WorkCard } from "@/data/work-cards";

interface WorkCardsProps {
  workCards: WorkCard[];
}

const WorkCards: React.FC<WorkCardsProps> = ({ workCards = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {workCards.map((workCard, index) => (
        <div
          key={index}
          className="flex flex-col justify-between p-4 border border-gray-200 rounded-md shadow-md"
        >
          <div>
            <h3 className="text-lg font-bold">{workCard.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{workCard.description}</p>
          </div>
          <div className="flex flex-wrap mt-4">
            {workCard.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 mr-2 text-sm text-gray-500 bg-gray-100 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
