import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, FunnelIcon } from "./Icon";
import SortOptions from "./SortOptions";
import useSideBarStore from "../store/useSidebarStore";

const Sort = () => {
  const setMobileFiltersOpen = useSideBarStore(
    (state) => state.setMobileFiltersOpen
  );
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-2">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
        All Products
      </h1>
      <div className="flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-slate-200 dark:hover:text-slate-100">
              Sort
              <ChevronDown />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-600">
              <SortOptions />
            </Menu.Items>
          </Transition>
        </Menu>
        <button
          type="button"
          className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
        >
          <span className="sr-only">View grid</span>
        </button>
        <button
          type="button"
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon />
        </button>
      </div>
    </div>
  );
};

export default Sort;
