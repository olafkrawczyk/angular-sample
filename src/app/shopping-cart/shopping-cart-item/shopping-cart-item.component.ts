import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {}
}
