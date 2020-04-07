import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, append } from '@ngxs/store/operators';

import { Product } from '../interfaces/product';

export interface ShopStateModel {
  products: Product[];
  cart: Product[];
}

export class AddItemToCart {
  static readonly type = '[Shop] Add item to cart';
  constructor(public product: Product) {}
}

@State<ShopStateModel>({
  name: 'shop',
  defaults: {
    products: [
      { id: 'product1', name: 'Product 1', description: 'description', price: 2 },
      { id: 'product2', name: 'Product 2', description: 'description', price: 12 },
      { id: 'product3', name: 'Product 3', description: 'description', price: 22 },
      { id: 'product4', name: 'Product 4', description: 'description', price: 32 },
      { id: 'product5', name: 'Product 5', description: 'description', price: 42 },
      { id: 'product6', name: 'Product 6', description: 'description', price: 52 },
      { id: 'product7', name: 'Product 7', description: 'description', price: 62 },
      { id: 'product8', name: 'Product 8', description: 'description', price: 62 },
    ],
    cart: [],
  },
})
export class ShopState {
  @Selector()
  static cart(state: ShopStateModel) {
    return state.cart;
  }

  @Action(AddItemToCart)
  addItem(ctx: StateContext<ShopStateModel>, action: AddItemToCart) {
    ctx.setState(
      patch({
        cart: append([action.product]),
      }),
    );
  }
}
