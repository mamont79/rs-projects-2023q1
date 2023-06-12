import AppController from '../controller/controller.js';
import AppView from '../view/appView.js';
import { INewsData, ISource } from '../../types/app.types.js';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data?: INewsData) => this.view.drawNews(data!))
    );
    this.controller.getSources((data?: INewsData) => this.view.drawSources(data));
  }
}

export default App;
