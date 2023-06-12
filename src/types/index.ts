export interface IArticle {
  id: string;
  name: string;
}

export interface ISource {
  id: string;
  name: string;
}

export type ISourceResp = {
  status: string;
  sources: ISourceItem[];
};

export type INewsResp = {
  status: string;
  total: number;
  articles: INewsArticle[];
};

export type INewsArticle = {
  source: ISource;
  urlToImage: string;
  url: string;
  author: string;
  title: string;
  publishedAt: string;
  description: string;
  content: string;
};

export type ISourceRespObj = Pick<ISourceItem, 'id' | 'name'>;

export type ISourceItem = {
  category: string;
  country: string;
  description: string;
  id: string;
  name: string;
  language: string;
  url: string;
};

// export interface IData {
//   articles: Array<IArticle>;
//   sources: Array<ISource>;
// }

// export interface INewsData {
//   articles: Array<IArticle>;
//   sources: Array<ISource>;
//   source: { name: string };
//   urlToImage: string;
//   author: string;
//   publishedAt: string;
//   title: string;
//   description: string;
//   url: string;
//   category: string;
// }
