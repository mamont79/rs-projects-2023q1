import News from './news/news.js';
import Sources from './sources/sources.js';
import { INewsData, ISource } from '../../types/index.js';

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: INewsData) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: INewsData) {
    const values = data.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
