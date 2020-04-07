import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router) {}

  ngOnInit() {}

  public navigate(): void {
    this.router.navigate(['/products', this.product.id]);
  }
}
