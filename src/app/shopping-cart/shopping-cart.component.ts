import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

import { Product } from '../interfaces/product';
import { ShopState } from '../state/shop.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  @Select(ShopState.cart) cart$: Observable<Product[]>;
  private subscription: Subscription;

  private cart: Product[];

  constructor() { }

  ngOnInit() {
    this.subscription = this.cart$.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
