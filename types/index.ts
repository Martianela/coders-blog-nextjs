import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";
import { type } from "os";

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}
export interface ICategoryAttributes {
  title: String;
  slug: String;
}
export interface IResourceMeta {
  pagination: IPagination;
}
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}
export interface IImageData {
  data: {
    id: number;
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}
export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}
export interface IArticleAttributes {
  title: string;
  body: string | MDXRemoteSerializeResult;
  slug: string;
  image: IImageData;
  createdAt: string;
  author: IAuthor;
  description: string;
}

export interface IArticles {
  id: Number;
  attributes: IArticleAttributes;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
  filters?: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}
