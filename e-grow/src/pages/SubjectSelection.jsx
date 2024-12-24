import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const subjects = ["Math", "Science", "History"];

const SubjectSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedClass = params.get("class");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Class {selectedClass} Subjects</h1>
      <div className="grid grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() =>
              navigate(`/chapters?class=${selectedClass}&subject=${subject}`)
            }
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelection;
