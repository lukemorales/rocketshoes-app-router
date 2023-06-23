import { Product } from '../products/product';

export type CartProduct = Product & {
  amount: number;
};
