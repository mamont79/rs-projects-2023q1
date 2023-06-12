export interface IArticle {
  id: string;
  name: string;
}

export interface ISource {
  id: string;
  name: string;
  sources: Array<ISource>;
}

// export interface IData {
//   articles: Array<IArticle>;
//   sources: Array<ISource>;
// }

export interface INewsData {
  articles: Array<IArticle>;
  sources: Array<ISource>;
  source: { name: string };
  urlToImage: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
}
