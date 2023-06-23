import { NextRequest, NextResponse } from 'next/server';

const stock = new Map<number, number>([
  [1, 3],
  [2, 5],
  [3, 2],
  [4, 1],
  [5, 5],
  [6, 10],
]);

type RouteOptions<Params> = {
  params: Params;
};

export const GET = async (
  _request: NextRequest,
  { params }: RouteOptions<{ productId: string }>,
) => {
  return NextResponse.json(stock.get(+params.productId));
};
