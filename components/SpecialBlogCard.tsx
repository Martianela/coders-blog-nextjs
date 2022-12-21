import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IArticles } from "../types";
interface IPropType {
  article: IArticles;
}
const SpecialBlogCard = ({ article }: IPropType) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md items-center h-64 flex gap-2 justify-between p-6">
      <Link href={`/article/${article.attributes.slug}`} className="">
        <span className="text-2xl w-2/3 text-white  font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
          {article.attributes.title}
        </span>
      </Link>{" "}
      <span className="text-white ">
        <Image src={"/book.png"} alt="xs" width={140} height={140} />
      </span>
    </div>
  );
};

export default SpecialBlogCard;
