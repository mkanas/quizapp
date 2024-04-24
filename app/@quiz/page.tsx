"use client";

import React, { useEffect, useState } from "react";
import useQuiz from "../store";

const Quiz = () => {
  const [Questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState("");
  const [loading, setLoading] = useState(false);
  const config = useQuiz((state) => state.config);
  const setScore = useQuiz((state) => state.setScore);

  useEffect(() => {
    async function getQuestions() {
      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=${config.numberOfQuestions}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
        )
      ).json();
      console.log(results);
    }
    getQuestions();
  });

  return (
    <section className="flex flex-col justify-center items-center mt-10 ">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Questions Number{" "}
        <span className="text-green-600 dark:text-blue-500"> #1</span>{" "}
      </h1>
      <p className="text-2xl ">Score : 0</p>
      <section className="shadow-2xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-200">
        <h4 className="mb-4 text-3xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-3xl ">
          What is the Channel Name?
        </h4>
        <div className="flex justify-evenly items-center my-20 flex-wrap w-[90%]">
          <button
            type="button"
            className="py-3.5  w-1/3 my-4 px-5 me-2 mb-2 shadow-2xl text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-0 shadow-green-200 hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="py-3.5  w-1/3 my-4 px-5 me-2 mb-2 shadow-2xl text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-0 shadow-green-200 hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="py-3.5  w-1/3 my-4 px-5 me-2 mb-2 shadow-2xl text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-0 shadow-green-200 hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
          <button
            type="button"
            className="py-3.5  w-1/3 my-4 px-5 me-2 mb-2 shadow-2xl text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-0 shadow-green-200 hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Alternative
          </button>
        </div>
        <button
          type="button"
          className="py-3.5  w-1/3 my-4 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border shadow-green-200 hover:bg-green-900 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default Quiz;
