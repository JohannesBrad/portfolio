import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center pt-10 md:py-10">
        <h2 className="text-3xl md:text-5xl font-medium">{title}</h2>
        <span className="ml-6 flex-1 border-t border-[#393939]"></span>
      </div>
    </div>
  );
};
