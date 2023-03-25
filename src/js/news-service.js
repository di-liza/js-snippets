const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = 'bb371d4eb42540c8a242cc5d4c5d1d9e';

export default class NewsApiService {
  constructor() {
    // сюда будем перезаписывать данные веденные в инпут
    this.searchQuery = '';

    /**  для того что бы при нажатии на кнопку подгружать следующую коллекцию 
    статей нужно при каждом успешном результате fetch уведичивать занчение
    page на 1 для того что бы при нажатии на кнопку Показать больше 
    нам приходила новая коллекция*/
    this.page = 1;
  }

  // Выносим запуск fetch в отдельный метод
  fetchArticles() {
    console.log(this);

    /* для того что бы порисовать по внешнем коде из fetchArticles
     надо вернуть промис который в свою очередь вернет статьи */
    return fetch(
      `${BASE_URL}everything?q=${this.searchQuery}&page=${this.page}&pageSize=5&language=en&apiKey=${API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        /** если результат https запроса успешный 
        увеличиваем номер странички на 1 для получения 
        при следующем запросе новой коллекции*/
        this.incrementPage();

        /** Из успешного промиса возвращаем  data.artucles
         * для отрисовки статей */
        return data.articles;
      })
      .catch(error => console.log(error));
  }

  // получаем значение searchQuery (того что ввели в инпут)
  get query() {
    return this.searchQuery;
  }
  // устанавливаем новое значение для this.searchQuery
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  /**  можно создать отдельный метод для увеличения номера страницы, 
    тогда можно будет использовать не только в класе */
  incrementPage() {
    this.page += 1;
  }

  /**сбрасываем номер страницы до 1, что бы при новом запросе 
 выводило только коллекцию по новому запросу начиная с 1 станицы */
  resetPage() {
    this.page = 1;
  }
}
