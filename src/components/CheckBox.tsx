import { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";

const CheckBox = ({ item }: { item: string }) => {
  const [arr, setArr] = useState<string[]>([]);
  const filterProductsOnCategory = useProductStore(
    (state) => state.filterProductsOnCategory
  );

  useEffect(() => {
    filterProductsOnCategory(arr);
  }, [arr, filterProductsOnCategory]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    const checked = e.target.checked;
    if (checked) {
      setArr((prevArr) => [...prevArr, item]);
    } else {
      setArr((prevArr) => prevArr.filter((category) => category !== item));
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        onChange={(e) => handleFilterChange(e, item)}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
      />
      <label className="ml-3 text-sm text-gray-600 dark:text-slate-200 cursor-pointer hover:text-gray-400">
        {item}
      </label>
    </div>
  );
};

export default CheckBox;
