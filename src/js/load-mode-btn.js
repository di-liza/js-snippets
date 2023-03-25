export default class LoadMoreBtn {
  /**При создании екзепляра класа мы будем создавать свойства  selector и hidden
   * когда создаем конструктор класа можем эти свойства сразу деструктуризировать
   * и также записать в свойство hidden значение по умолчанию false
   */
  constructor({ selector, hidden = false }) {
    /** Сдесь мы записываем в значение  this.refs, то есть в объект с ссылками
     *  на составные елементы кнопки, вызов метода getRefs которому аргументом
     * передаем селектор кнопки по котрому мы будем получать на нее ссылку
     */
    this.refs = this.getRefs(selector);

    /**если значение  hidden равно true примени метод hide() для скрытия кнопки*/
    hidden && this.hide();
  }
  /**Метод для получения ссылки на кнопку и ее елементы */
  getRefs(selector) {
    /**Создаем пустой объект, в который потом записываем свойства */
    const refs = {};

    /** тут как раз и будет записан селектор по которму мы будем находить кнопку  */
    refs.button = document.querySelector(selector);

    /**Тут мы полчаем ссылку на  span с класом label который вложен в кнопку*/
    refs.label = refs.button.querySelector('.label');

    /**Получаем ссылку на  span с класом spinner который вложен в кнопку*/
    refs.spinner = refs.button.querySelector('.spinner');

    /**Возвращаем из метода объект с ссылками */
    return refs;
  }

  /**Метод который переводит кнопку в активное состояние */
  enable() {
    /**убираем атрибут кнопки  disabled */
    this.refs.button.disabled = false;

    /**меняем  textContent*/
    this.refs.label.textContent = 'Показать ещё';

    /**Скрываем спинер заргрузки */
    this.refs.spinner.classList.add('is-hidden');
  }

  /**Метод который делает кнопку неактивной для нажатия и визуализирует 
     загрузку данных */
  disable() {
    /**устанавливаем на кнопку атрибут  disabled*/
    this.refs.button.disabled = true;

    /**меням текст кнопки */
    this.refs.label.textContent = 'Загружаем...';

    /**делаем спинер заргрузки активным */
    this.refs.spinner.classList.remove('is-hidden');
  }

  /**метод котрый делает кнопку видимой */
  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  /**метод который скрывает кнопку */
  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}
