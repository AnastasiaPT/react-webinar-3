import { generateCode } from './utils';

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  
  getBasketLen() {
    return this.state.basket.length;
  }

  getBasketCost() {
    return this.state.basket.reduce((acc, item) => acc + item.price * item.amount, 0);
  }

  addItemBasket(item) {
    const inList = this.state.basket.find(thing => thing.code === item.code)
    if (inList) {
      this.setState({
        ...this.state,
        basket: this.state.basket.map(thing => {
          if (thing.code === item.code) {
            return {
              ...thing,
              amount: thing.amount + 1
            }
          }
         return thing
       })
     })
   }
     else {
      this.setState({
        ...this.state,
        basket: [...this.state.basket, {...item, amount: 1}]
      })
   }
  }

  deleteItemBasket(item) {
    
      this.setState({
        ...this.state,
        basket: [...this.state.basket.filter(thing => thing.code !== item.code)]
      })
   
 }
   
}
export default Store;
