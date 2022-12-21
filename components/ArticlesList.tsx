import React from "react";
import { IArticles } from "../types";
import BlogCard from "./BlogCard";
import SpecialBlogCard from "./SpecialBlogCard";
interface IProptype {
  articles: IArticles[];
}
const ArticlesList = ({ articles }: IProptype) => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 mt-16">
      {articles.map((article, index) => {
        return (
          <>
            {index === 1 ? (
              <SpecialBlogCard key={index} article={article} />
            ) : (
              <BlogCard key={index} article={article} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default ArticlesList;
