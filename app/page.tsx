"use client";

import Button from "@/components/button";
import DropOptions from "@/components/dropdown";
import useQuiz from "./store";

export default function Home() {
  const useConfig = useQuiz((state) => state.config);
  const addNumberOfQuestions = useQuiz((state) => state.addNumberOfQuestions);

  return (
    <section className="flex  flex-col items-center justify-center leading-none tracking-tight text-gray-900 my-10">
      <h1 className="mb-4">Welcome to the Quiz App</h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[75%]">
        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Questions
          </label>
          <input
            onChange={(e) => addNumberOfQuestions(e.target.value)}
            type="number"
            id="large-input"
            defaultValue={10}
            min={0}
            max={50}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="flex flex-col justify-center items-center">
            <DropOptions />
            <Button />
          </div>
        </div>
      </section>
    </section>
  );
}
