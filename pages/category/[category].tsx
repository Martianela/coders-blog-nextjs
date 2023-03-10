import { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Tabs from "../../components/Tabs";
import { fetchArticles, fetchCategories } from "../../http";
import {
  IArticles,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "../../types";
import * as qs from "qs";
import ArticlesList from "../../components/ArticlesList";
import Pagination from "../../components/Pagination";
import { CapitalizeString, makeCategory } from "../../utils";
import { useRouter } from "next/router";

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
  articles: {
    items: IArticles[];
    pagination: IPagination;
  };
  slug: string;
}
const category = ({ categories, articles, slug }: IPropType) => {
  const { page, pageCount } = articles.pagination;
  console.log(articles);
  const formattedCategory = () => {
    return CapitalizeString(makeCategory(slug));
  };
  const router = useRouter();
  const handleSearch = (query: string) => {
    router.push(`/category/${slug}?search=${query}`);
  };
  return (
    <>
      <Head>
        <title>Coders blog {formattedCategory()} </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories} handleSearch={handleSearch} />
      <ArticlesList articles={articles.items} />
      <Pagination
        page={page}
        pageCount={pageCount}
        redirectUrl={`/category/${slug}`}
      />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("query", query);
  const options: Partial<IQueryOptions> = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        slug: query.category,
      },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 25,
    },
  };
  if (query.search) {
    options.filters = {
      title: {
        $containsi: query.search,
      },
    };
  }
  const queryString = qs.stringify(options);
  //articles
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticles[]>> =
    await fetchArticles(queryString);
  // categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },

      slug: query.category,
    },
  };
};

export default category;
