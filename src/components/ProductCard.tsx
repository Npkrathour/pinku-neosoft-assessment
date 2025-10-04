"use client";
import {
  CircleAlertIcon,
  ShoppingCartIcon,
  Star,
  StarHalf,
} from "lucide-react";
import Image from "next/image";

export type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
  status: string;
  notify: () => void;
  disabled?: boolean;
};

const renderStars = (rate: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(
        <Star
          key={i}
          size={16}
          className="inline text-yellow-500 fill-yellow-500"
        />
      );
    } else if (rate >= i - 0.5) {
      stars.push(
        <span key={i} className="relative inline-flex">
          <StarHalf
            size={16}
            className="inline text-yellow-500 fill-yellow-500"
          />
          <StarHalf
            size={16}
            className="absolute inline text-yellow-500 -scale-x-100"
          />
        </span>
      );
    } else {
      stars.push(<Star key={i} size={16} className="inline text-yellow-500" />);
    }
  }
  return stars;
};

export default function ProductCard({
  image,
  title,
  description,
  price,
  disabled,
  rating,
  status,
  notify,
}: ProductCardProps) {
  return (
    <div
      className="w-sm bg-card rounded-2xl border shadow-md hover:shadow-lg mx-auto p-4 transition-all ease duration-300 delay-200"
      role="region"
      aria-label={`Product card for ${title}`}
    >
      <figure className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-56 object-cover rounded-lg"
        />
        <figcaption className="py-4 text-start">
          <div className="flex gap-2 items-center justify-between mb-2">
            <p className="text-xs font-medium mt-1">
              Sell by -{" "}
              <span className="text-yellow-500 text-sm">Foxtale Store</span>
            </p>
            {rating && (
              <div className="text-yellow-500 flex items-center gap-1">
                <span className="text-sm inline-block mt-1">{rating.rate}</span>
                <span className="h-5 w-0.5 bg-border"></span>
                {renderStars(rating.rate)}
              </div>
            )}
          </div>
          <h2 className="text-md font-semibold mb-1 truncate">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </figcaption>

        {status === "sale" ? (
          <span className="text-xs font-normal bg-red-600 py-1 px-2 rounded-2xl absolute top-3 right-3 text-white flex">
            <CircleAlertIcon className="size-4 mr-1" />
            Sale
          </span>
        ) : status === "out-of-stock" ? (
          <span className="text-xs font-normal bg-red-600 py-1 px-2 rounded-2xl absolute top-3 right-3 text-white flex">
            <CircleAlertIcon className="size-4 mr-1" />
            Out of Stock
          </span>
        ) : (
          ""
        )}
      </figure>
      <div className="flex gap-5 items-center">
        <div>
          <p className="text-xs font-semibold text-start">Price:</p>
          <h3 className="font-bold text-lg">₹ {price}</h3>
        </div>

        <button
          onClick={notify}
          disabled={disabled}
          aria-label={`View more details about ${title}`}
          className="flex-1 py-3 bg-sky-900 rounded-md text-white font-medium  cursor-pointer flex justify-center gap-3"
        >
          Add to Cart <ShoppingCartIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
