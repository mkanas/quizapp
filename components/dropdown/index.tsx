"use client";
import useQuiz from "@/app/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

type CategoryType = {
  id: number;
  name: string;
};

const Type = ["Multiple", "Boolean"];
const Level = ["Easy", "Medium", "Hard"];

const DropOptions = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const addCategory = useQuiz((state) => state.addCategory);
  const config = useQuiz((state) => state.config);
  const addLevel = useQuiz((state) => state.addLevel);
  const addType = useQuiz((state) => state.addType);

  useEffect(() => {
    async function fetchCategory() {
      const { trivia_categories } = await (
        await fetch("https://opentdb.com/api_category.php")
      ).json();
      setCategories([...trivia_categories]);
    }
    fetchCategory();
  });

  return (
    <section className="flex justify-evenly items-center py-5 w-full">
      <div className="px-7 py-4 w-1/3 mx-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full p-10 py-5 rounded-lg shadow-lg hover:bg-blue-600 hover:text-gray-100">
            {config.category.name ? config.category.name : "CATEGORY"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>SELECT CATEGORY</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuItem
                key={category.name}
                onClick={() => addCategory(category.id, category.name)}
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-7 py-4 w-1/3 mx-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full p-10 py-5 rounded-lg shadow-lg hover:bg-blue-600 hover:text-gray-100">
            {config.level ? config.level : "LEVEL"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>SELECT LEVEL</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Level.map((e) => (
              <DropdownMenuItem onClick={() => addLevel(e)} key={e}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-7 py-4 w-1/3 mx-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex outline-none justify-between w-full p-10 py-5 rounded-lg shadow-lg hover:bg-blue-600 hover:text-gray-100">
            {config.type ? config.type : "TYPE"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>SELECT TYPE</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {Type.map((e) => (
              <DropdownMenuItem onClick={() => addType(e)} key={e}>
                {e}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default DropOptions;
