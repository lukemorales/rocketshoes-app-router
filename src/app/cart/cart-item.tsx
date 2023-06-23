import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { cartActions } from './cart.slice';
import Image from 'next/image';
import { useAppDispatch } from '@/shared/store';
import { formatPrice } from '@/shared/format-price';
import { CartProduct } from './cart-product';

export const CartItem: React.FC<{ product: CartProduct }> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className="border-b-[1px] border-b-[#eee]">
      <td className="p-3">
        <figure>
          <Image
            width={100}
            height={100}
            src={product.image}
            alt={product.title}
          />
        </figure>
      </td>

      <td className="p-3">
        <strong className="block">{product.title}</strong>
        <span className="block mt-1 text-lg font-bold">
          {product.priceFormatted}
        </span>
      </td>

      <td className="p-3">
        <div className="flex items-center justify-center">
          <button
            className="bg-none border-0 py-[6px] px-2"
            type="button"
            onClick={() =>
              dispatch(
                cartActions.updateAmount({
                  id: product.id,
                  amount: product.amount - 1,
                }),
              )
            }
          >
            <MdRemoveCircleOutline size={20} color="#7159c1" />
          </button>

          <input
            className="border-[1px] border-[#ddd] rounded-sm text-[#666] p-[6px] w-[50px] text-center"
            type="text"
            readOnly
            value={product.amount}
          />

          <button
            className="bg-none border-0 py-[6px] px-2"
            type="button"
            onClick={() =>
              dispatch(cartActions.increaseAmountRequest(product.id))
            }
          >
            <MdAddCircleOutline size={20} color="#7159c1" />
          </button>
        </div>
      </td>

      <td className="p-3">
        <strong className="block">
          {formatPrice((product.price * product.amount) / 100)}
        </strong>
      </td>

      <td className="p-3">
        <button
          className="bg-none border-0 py-[6px] px-2"
          type="button"
          onClick={() => dispatch(cartActions.remove({ id: product.id }))}
        >
          <MdDelete size={20} color="#7159c1" />
        </button>
      </td>
    </tr>
  );
};
