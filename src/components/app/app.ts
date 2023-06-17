import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsResponse, ISourceResponse } from '../../types/index';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data?: INewsResponse) => this.view.drawNews(data!))
    );
    this.controller.getSources((data?: ISourceResponse) => this.view.drawSources(data!));
  }
}

export default App;
