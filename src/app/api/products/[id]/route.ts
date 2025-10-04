import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "NatAura Intelligent Ageing Serum",
    price: 109.95,
    description:
      "Advanced Anti-Aging Formula with skin-brightening properties | Reduces Dark Spots & Uneven Tone | For All Skin Types | 30ml",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd",
    rating: { rate: 3.9, count: 120 },
    status: "out-of-stock",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve...",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
    status: "in-stock",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 },
    status: "sale",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between screen and practice...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 2.1, count: 430 },
    status: "out-of-stock",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.6, count: 400 },
    status: "in-stock",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3.9, count: 70 },
    status: "out-of-stock",
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}
