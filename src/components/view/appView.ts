import News from './news/news';
import Sources from './sources/sources';
import { INewsResponse, ISourceResponse } from '../../types/index';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: INewsResponse) {
    const values = data?.articles || [];
    this.news.draw(values);
  }

  drawSources(data: ISourceResponse) {
    const values = data.sources || [];
    this.sources.draw(values);
  }
}

export default AppView;
