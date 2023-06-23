import { NextRequest, NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 17990,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 13990,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 3,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 21990,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 5,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 13990,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 6,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 21990,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 4,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 17990,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];

export const GET = async (request: NextRequest) => {
  return NextResponse.json(products);
};
