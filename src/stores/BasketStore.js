import {observable, computed, reaction, action, decorate} from 'mobx';

export default class BasketStore{
    basket = observable([])
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    get productsInBasket(){
        return this.basket.length
    }
    addProductToBasket(product){
        this.basket.push(product)
    }

}
decorate(BasketStore,{
    basket:observable,
    productsInBasket:computed,
    addProductToBasket:action
})
