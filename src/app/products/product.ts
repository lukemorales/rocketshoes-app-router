export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
};

export type ApiProduct = Pick<Product, 'id' | 'title' | 'image' | 'price'>;
