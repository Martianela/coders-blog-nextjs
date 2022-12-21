import { serialize } from "next-mdx-remote/serialize";
import { IArticles } from "../types";

export const formateDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log("date", date);

  return date;
};
export const makeCategory = (slug: string) => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};
export const CapitalizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timer);
    console.log(args);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
  return debounced;
};

export const serializeMarkdown = async (item: IArticles) => {
  const body = await serialize(item.attributes.body as string);
  return {
    ...item,
    attributes: {
      ...item.attributes,
      body: body,
    },
  };
};
