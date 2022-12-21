import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GoSearch } from "react-icons/go";
import { ICategory } from "../types";

interface IPropType {
  categories: {
    items: ICategory[];
  };
  handleSearch: (query: string) => void;
}
const Tabs = ({ categories, handleSearch }: IPropType) => {
  const router = useRouter();
  //console.log(router);
  const isActiveLink = (category: ICategory) => {
    return category.attributes.slug === router.query.category;
  };

  return (
    <div className="my-8 flex flex-col-reverse sm:flex-row sm:items-center justify-between border-b-2 border-gray-100">
      <ul className=" flex  text-[15px] ">
        <li
          className={
            "mr-6 pb-4  border-b-4 rounded-sm " +
            `${
              router.pathname === "/"
                ? "border-primary text-primary"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="/">Recent</Link>
        </li>

        {categories.items.map((category, key) => {
          return (
            <li
              key={key}
              className={
                "mr-6 pb-4  border-b-4 rounded-sm " +
                `${
                  isActiveLink(category)
                    ? "border-primary text-primary"
                    : "border-white text-gray-400"
                }`
              }
            >
              <Link href={`/category/${category.attributes.slug}`}>
                {category.attributes.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center text-center text-[15px] gap-1 py-3 my-4 sm:my-0">
        <GoSearch />
        <span className="">
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="search"
            className="bg-transparent ml-1 px-2 py-1 focus:outline-none h-full"
          />
        </span>
      </div>
    </div>
  );
};

export default Tabs;
