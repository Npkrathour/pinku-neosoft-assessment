"use client";
import FramerWrapper from "@/components/FramerWrapper";
import ProductCard from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import ThemeToggle from "@/theme/theme-toggle";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Home() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/products/1");

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const data: Product = await res.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err);
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 dark:bg-black transition-colors duration-300">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="text-center relative w-full max-w-md">
          {error && (
            <p className="text-red-500 dark:text-red-400">Error: {error}</p>
          )}

          <FramerWrapper>
            {loading && <ProductCardSkeleton />}
            {product && !loading && !error && (
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                status={product.status}
                disabled={product.status === "out-of-stock"}
                notify={() => toast.success(`Viewing product ${product.id}`)}
              />
            )}
          </FramerWrapper>
        </div>
      </main>
    </div>
  );
}
