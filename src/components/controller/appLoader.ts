import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '5608cc398fd54acca6a6384853eeaa4e',
    });
  }
}

export default AppLoader;
