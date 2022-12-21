import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IArticles } from "../types";
import { formateDate } from "../utils";
interface IPropType {
  article: IArticles;
}
const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.title}
        </h1>
        <div className="flex gap-2 my-4 items-center">
          <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
            <Image
              src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
              alt="img"
              height={40}
              width={40}
              className="w-[40px] h-[40px] "
            />
          </div>
          <span className="text-sm font-bold text-gray-600">
            {article.attributes.author.data.attributes.firstname}{" "}
            {article.attributes.author.data.attributes.lastname} on
          </span>
          <span className="text-gray-400 text-sm ">
            {formateDate(article.attributes.createdAt)}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            {article.attributes.description.slice(0, 250)}
            {article.attributes.description.length > 250 ? "..." : " "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
