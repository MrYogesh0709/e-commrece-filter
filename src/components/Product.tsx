import { StarRating } from "./StarIcon";
import { PRODUCT_TITLE_LENGTH, formatPrice } from "../lib/lib";

type ProductType = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
};

const Product = ({ title, price, rating, thumbnail }: ProductType) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-slate-900 lg:aspect-none group-hover:opacity-75 lg:h-60 min-h-60">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="my-2">
        <StarRating value={rating} />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm text-slate-900 dark:text-slate-200">
            {title?.length > PRODUCT_TITLE_LENGTH
              ? title.substring(0, PRODUCT_TITLE_LENGTH) + "..."
              : title}
          </h3>
        </div>
        <div>
          <div className="inline">
            <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
              {formatPrice(price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
