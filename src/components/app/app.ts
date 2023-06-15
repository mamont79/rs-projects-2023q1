import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsResp, ISourceResp } from '../../types/index';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data?: INewsResp) => this.view.drawNews(data!))
    );
    this.controller.getSources((data?: ISourceResp) => this.view.drawSources(data!));
  }
}

export default App;
