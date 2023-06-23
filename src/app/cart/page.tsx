'use client';

import { MdRemoveShoppingCart } from 'react-icons/md';

import { useAppSelector } from '@/shared/store';

import { formatPrice } from '@/shared/format-price';
import { exhaustive } from 'exhaustive';
import Link from 'next/link';
import { CartItem } from './cart-item';

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const total = useAppSelector((state) => {
    const sum = state.cart.reduce((totalAmount, product) => {
      return totalAmount + product.price * product.amount;
    }, 0);

    return formatPrice(sum / 100);
  });

  return (
    <article className="p-7 bg-white rounded">
      {exhaustive(cart.length > 0, {
        true: () => (
          <>
            <table className="w-full border-collapse">
              <thead className="sm:hidden">
                <tr>
                  <th className="text-[#999] text-left p-3" />
                  <th className="text-[#999] text-left p-3">PRODUCT</th>
                  <th className="text-[#999] text-center p-3">AMOUNT</th>
                  <th className="text-[#999] text-left p-3">SUBTOTAL</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </tbody>
            </table>

            <footer className="mt-7 flex justify-between items-center sm:flex-col-reverse">
              <button
                className="bg-[#7159c1] text-white border-0 rounded py-3 px-5 font-bold uppercase transition-all duration-[180] ease-in-out sm:mt-5 sm:w-full sm:p-5"
                type="submit"
              >
                Proceed to Checkout
              </button>

              <div className="flex items-baseline">
                <span className="text-[#999] font-bold">TOTAL:</span>
                <strong className="text-3xl ml-2">{total}</strong>
              </div>
            </footer>
          </>
        ),
        false: () => (
          <section className="min-h-[600px] flex justify-center items-center relative sm:min-h-[400px]">
            <MdRemoveShoppingCart className="text-[260px] text-[#f3f3f6] absolute" />

            <div className="z-[1] text-center">
              <h2 className="text-6xl">Oops...</h2>
              <p className="mt-3 mb-7">
                Looks like your shopping cart is empty!
              </p>

              <Link
                className="bg-[#7159c1] text-white border-0 rounded py-3 px-5 font-bold uppercase no-underline inline-block"
                href="/"
              >
                Start Shopping
              </Link>
            </div>
          </section>
        ),
      })}
    </article>
  );
}
