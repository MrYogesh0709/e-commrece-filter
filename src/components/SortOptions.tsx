import { classNames, sortOptions } from "../lib/lib";
import { Menu } from "@headlessui/react";
import useProductStore from "../store/useProductStore";

type SortData = {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  option: {
    name: string;
    sort: "price" | "rating";
    order: "asc" | "desc";
    current: boolean;
  };
};

const SortOptions = () => {
  const sortProducts = useProductStore((state) => state.sortProducts);
  const sortData = ({ e, option }: SortData) => {
    e.preventDefault();
    sortProducts({ sort: option.sort, order: option.order });
  };
  return (
    <form className="py-1" typeof="submit">
      {sortOptions.map((option) => (
        <Menu.Item key={option.name}>
          {({ active }) => (
            <button
              className={classNames(
                option.current
                  ? "font-medium text-gray-900 dark:text-slate-100"
                  : "text-gray-500 dark:text-slate-200",
                active ? "bg-gray-100 dark:bg-gray-700" : "",
                "block px-4 py-2 text-sm"
              )}
              onClick={(e) => sortData({ e, option })}
            >
              {option.name}
            </button>
          )}
        </Menu.Item>
      ))}
    </form>
  );
};

export default SortOptions;
