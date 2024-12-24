import React from "react";
import { useNavigate } from "react-router-dom";

const classes = Array.from({ length: 12 }, (_, i) => i + 1);

const ClassSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Select Your Class</h1>
      <div className="grid grid-cols-3 gap-4">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => navigate(`/subjects?class=${cls}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Class {cls}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelection;
