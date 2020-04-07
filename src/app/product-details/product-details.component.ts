import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { first } from 'rxjs/operators';

import { Product } from '../interfaces/product';
import { AddItemToCart } from '../state/shop.state';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private product: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit() {
    this.store
      .select(state => state.shop.products)
      .pipe(first())
      .subscribe(products => {
        this.product = products.find(
          prod => prod.id === this.activeRoute.snapshot.params.id,
        );
        if (!this.product) {
          this.router.navigate(['/products']);
        }
      });
  }

  private addProductToCart() {
    this.store.dispatch(new AddItemToCart(this.product)).subscribe();
  }
}
