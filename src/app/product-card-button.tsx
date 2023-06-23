'use client';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { TailSpin } from 'react-loader-spinner';
import { MdAddShoppingCart } from 'react-icons/md';
import { cartActions } from './cart/cart.slice';
import { Product } from './products/product';
import { useTransition } from 'react';
import { exhaustive } from 'exhaustive';

type ProductCardButtonProps = {
  product: Product;
  onAddToCart: (
    id: number,
    options: { currentAmount: number },
  ) => Promise<boolean>;
};

export const ProductCardButton: React.FC<ProductCardButtonProps> = ({
  product,
  onAddToCart,
}) => {
  const dispatch = useAppDispatch();

  const cartAmount = useAppSelector(
    (state) =>
      state.cart.find((cartProduct) => cartProduct.id === product.id)?.amount ??
      0,
  );

  const [isLoading, startTransition] = useTransition();

  function handleAddToCart() {
    startTransition(async () => {
      const hasStock = await onAddToCart(product.id, {
        currentAmount: cartAmount,
      });

      if (!hasStock) {
        return;
      }

      const action =
        cartAmount === 0
          ? cartActions.add(product)
          : cartActions.updateAmount({
              id: product.id,
              amount: cartAmount + 1,
            });

      dispatch(action);
    });
  }

  return (
    <button
      className="bg-[#7159c1] text-white border-0 rounded overflow-hidden relative flex items-center ease-in-out transition-all disabled:opacity-80"
      type="button"
      onClick={handleAddToCart}
      disabled={isLoading}
    >
      <div className="flex items-center p-3 bg-black/[0.2] bg-blend-darken absolute">
        {exhaustive(isLoading, {
          true: () => <TailSpin color="#FFF" height={16} width={32} />,
          false: () => (
            <>
              <MdAddShoppingCart className="mx-1" size={16} color="#FFF" />
              {cartAmount}
            </>
          ),
        })}
      </div>

      <span className="p-3 flex-1 text-center font-bold">ADD TO CART</span>
    </button>
  );
};
