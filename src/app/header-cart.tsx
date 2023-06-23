'use client';

import { MdShoppingCart } from 'react-icons/md';

import { useAppSelector } from '@/shared/store';
import Link from 'next/link';

export const HeaderCart: React.FC = () => {
  const cartSize = useAppSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + product.amount;
    }, 0),
  );

  return (
    <Link
      className="flex items-center no-underline relative transition-opacity ease-in-out duration-150 hover:opacity-70"
      href="/cart"
    >
      <div className="text-right mr-2">
        <strong className="block text-white">My Cart</strong>
        <span className="text-xs text-[#999]">
          {cartSize === 1 ? `${cartSize} product` : `${cartSize} products`}
        </span>
      </div>

      <MdShoppingCart size={36} color="#FFF" />
      <span className="bg-[#7159c1] text-white text-[11px] leading-5 text-center h-[20px] w-[20px] rounded-[50%] absolute right-[-2px] top-[-6px] hidden sm:inline">
        {cartSize}
      </span>
    </Link>
  );
};
