import FilterOnCategory from "./FilterOnCategory";
import PriceRange from "./PriceRange";

const Filter = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <PriceRange />
      <FilterOnCategory />
    </div>
  );
};

export default Filter;
