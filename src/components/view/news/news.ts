import './news.css';
import { IData } from '../../app/appTypes.js';

class News {
  draw(data) {
    // data?: IData   тогда ошибки лезут в app.ts
    const news = data.length >= 10 ? data.filter((_item: HTMLElement, idx: number) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLElement; //HTMLTemplateElement тогда куча ошибок по другим строчкам по Ноде

    news.forEach((item, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true); // пропадает ошибка с HTMLTemplateElement но см.выше

      if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

      newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
      newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsClone.querySelector('.news__description-title').textContent = item.title;
      newsClone.querySelector('.news__description-source').textContent = item.source.name;
      newsClone.querySelector('.news__description-content').textContent = item.description;
      newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLElement).innerHTML = '';
    (document.querySelector('.news') as HTMLElement).appendChild(fragment);
  }
}

export default News;
