import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const chapters = ["Chapter 1", "Chapter 2", "Chapter 3"];

const ChapterSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const subject = params.get("subject");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{subject} Chapters</h1>
      <div className="grid grid-cols-2 gap-4">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            onClick={() =>
              navigate(`/read?chapter=${chapter}&subject=${subject}`)
            }
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            {chapter}
          </button>
        ))}
      </div>
      <button
        onClick={() => navigate(`/practice?subject=${subject}`)}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Practice Tests
      </button>
    </div>
  );
};

export default ChapterSelection;
