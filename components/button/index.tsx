"use client";
import React from "react";
import useQuiz from "@/app/store";

const Button = () => {
  const addStatus = useQuiz((state) => state.addStatus);
  return (
    <button
      onClick={() => addStatus("start")}
      type="button"
      className="p-4 w-1/2 m-auto text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Start Quiz
    </button>
  );
};

export default Button;
