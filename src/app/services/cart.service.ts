import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItems } from '../models/carItems';
import {CartItem} from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }
  addToCart(car:Car){
    let item = CartItems.find(c=>c.Car.id===car.id);
    if(item){
      item.quantity +=1 //
      // return
    }
    else{
      let cartItem = new CartItem();
      cartItem.Car = car
      cartItem.quantity = 1
      console.log(cartItem)
      console.log(cartItem.quantity)
      CartItems.push(cartItem)
    }
  }
  
  deleteToCart(car:Car){
    let item =  CartItems.find(c=> c.Car.id === car.id)
    if(item.quantity > 1){
      item.quantity -= 1
    }
    else if(item.quantity == 1){
      CartItems.splice(CartItems.indexOf(item) , 1)
    }
  }
  clearToCart(car:Car){
    let item =  CartItems.find(c=> c.Car.id === car.id)
    if(item.quantity > 0){
      CartItems.splice(CartItems.indexOf(item) , 1)
    }
  }
  plusToCart(car:Car){
    let item =  CartItems.find(c=> c.Car.id === car.id)
    if(item.quantity >= 1){
      item.quantity += 1
    }
    else if(item.quantity == 1){
      CartItems.splice(CartItems.indexOf(item) , 1)
    }
  }
  list() : CartItem[]{
    return CartItems;
  }
}