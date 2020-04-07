import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';
import { ShopState } from '../state/shop.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Select(state => state.shop.products) products$: Observable<Product>;

  constructor() {}

  ngOnInit() {}
}
