import Loader from './loader.js';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '5608cc398fd54acca6a6384853eeaa4e',
    });
  }
}

export default AppLoader;
