export interface IArticle {
  id: string;
  name: string;
}

export interface ISource {
  id: string;
  name: string;
}

export interface OptionLoader {
  [key: string]: string;
}

export type ISourceResponse = {
  status: string;
  sources: ISourceItem[];
};

export type INewsResponse = {
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

export type CallbackType<T> = (data?: T) => void;

export type ISourceResponseObject = Pick<ISourceItem, 'id' | 'name'>;

export type ISourceItem = {
  category: string;
  country: string;
  description: string;
  id: string;
  name: string;
  language: string;
  url: string;
};
