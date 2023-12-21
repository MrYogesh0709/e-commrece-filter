import { useState } from "react";
import { ArrowRight } from "./Icon";
import useProductStore from "../store/useProductStore";

const PriceRange = () => {
  const [minPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2500);
  const filterProducts = useProductStore(
    (state) => state.setFilterProductsOnRange
  );

  const filterProduct = () => {
    filterProducts({ minPrice, maxPrice });
  };

  return (
    <div className="w-full relative flex items-center">
      <label
        htmlFor="minmax-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only"
      >
        Min-max range
      </label>
      <input
        id="minmax-range"
        type="range"
        min={0}
        max={2500}
        value={maxPrice}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-200"
        onChange={(e) => setMaxPrice(+e.target.value)}
      />
      <div className="absolute -bottom-4 right-16  bg-gray-900 text-white text-xs rounded-md py-1 px-2">
        {maxPrice}
      </div>
      <button
        className="text-slate-200 hover:bg-gray-900 rounded-md py-2 px-4 ml-2 bg-gray-700"
        onClick={filterProduct}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default PriceRange;
