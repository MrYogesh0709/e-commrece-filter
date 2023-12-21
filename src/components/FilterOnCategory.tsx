import { Disclosure } from "@headlessui/react";
import CategoryItem from "./CategoryItem";
import { MinusIcon, PlusIcon } from "./Icon";

const FilterOnCategory = () => {
  return (
    <Disclosure as="div" className="border-gray-200 py-6 w-full">
      {({ open }) => (
        <>
          <h3 className="flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between px-2 bg-slate-200 py-3 text-sm text-gray-400 hover:text-gray-500 dark:bg-slate-900 rounded-md">
              <span className="font-medium text-gray-900 dark:text-slate-200">
                Category
              </span>
              <span className="ml-6 flex items-center">
                {open ? <MinusIcon /> : <PlusIcon />}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4">
              <CategoryItem />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FilterOnCategory;
