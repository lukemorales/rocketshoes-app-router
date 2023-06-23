import { ApiProduct, Product } from './products/product';
import { formatPrice } from '@/shared/format-price';
import { ProductCardButton } from './product-card-button';
import Image from 'next/image';

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function Home() {
  const products: ApiProduct[] = await fetch(
    'http://localhost:3000/api/products',
  ).then((res) => res.json());

  await wait(1500);

  return (
    <ul className="grid grid-cols-3 gap-5 list-none">
      {products.map((apiProduct) => {
        const product: Product = {
          ...apiProduct,
          priceFormatted: formatPrice(apiProduct.price / 100),
        };

        return <ProductCard key={product.id} data={product} />;
      })}
    </ul>
  );
}

type ProductCardProps = {
  data: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  async function verifyStock(id: number, options: { currentAmount: number }) {
    'use server';

    await wait(280);

    const availableStock: number = await fetch(
      `http://localhost:3000/api/stock/${id}`,
    ).then((res) => res.json());

    const stockLeft = availableStock - options.currentAmount;

    return stockLeft >= 0;
  }

  return (
    <li className="flex flex-col bg-white rounded p-5">
      <figure className="flex justify-center relative w-full max-h-[250px] pt-[91%] text-center sm:pt-[60%]">
        <Image
          width={256}
          height={256}
          className="absolute inset-0 max-h-full m-auto object-contain"
          src={data.image}
          alt={data.title}
        />
      </figure>
      <strong className="text-base leading-5 mt-1">{data.title}</strong>

      <div className="flex flex-col mt-auto">
        <span className="text-[21px] font-bold mt-1 mb-5">
          {data.priceFormatted}
        </span>

        <ProductCardButton product={data} onAddToCart={verifyStock} />
      </div>
    </li>
  );
};
