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
    </div>
  );
};

export default SubjectSelection;
