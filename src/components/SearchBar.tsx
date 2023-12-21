import { useMemo, useState } from "react";
import { SearchIcon } from "./Icon";
import useProductStore from "../store/useProductStore";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const filteredProducts = useProductStore(
    (state) => state.setFilterProductsOnSearch
  );
  const debounce = () => {
    let timeOutID: number;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      clearTimeout(timeOutID);
      timeOutID = setTimeout(() => {
        filteredProducts(e.target.value);
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <div className="px-4">
      <div className="pt-2  text-gray-600 flex items-center">
        <input
          className="border-2 border-gray-300 dark:bg-slate-600 dark:text-slate-200 bg-slate-200 h-10 px-5 rounded-lg text-sm focus:outline-none w-full"
          type="search"
          name="search"
          value={search}
          placeholder="Search"
          onChange={optimizedDebounce}
        />
        <button className="ml-4" onClick={() => optimizedDebounce}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
