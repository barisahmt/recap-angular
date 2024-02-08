import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { Car } from '../../models/car';

@Component({
  selector: 'cart-summary',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit {
  ngOnInit(): void {
    this.getCart();
  }
  cartItems: CartItem[] = [];
  constructor(private cartService: CartService) {}

  getCart() {
    this.cartItems = this.cartService.list();
  }
  removeToCart(car: Car) {
    this.cartService.deleteToCart(car);
  }
  clearAllItem(car: Car) {
    this.cartService.clearToCart(car);
  }
  plusAllItem(car: Car) {
    this.cartService.plusToCart(car);
  }
}
