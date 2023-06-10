export interface IArticle {
  id: string;
  name: string;
}

export interface ISource {
  id: string;
  name: string;
}

export interface IData {
  articles: Array<IArticle>;
  sources: Array<ISource>;
}
