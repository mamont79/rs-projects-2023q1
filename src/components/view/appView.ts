import News from './news/news.js';
import Sources from './sources/sources.js';
import { INewsResp, ISourceResp } from '../../types/index.js';

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: INewsResp) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISourceResp) {
    const values = data.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
