import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useSideBarStore from "../store/useSidebarStore";
import { CrossIcon } from "./Icon";
import Filter from "./Filter";

export default function MobileFilter() {
  const setMobileFiltersOpen = useSideBarStore(
    (state) => state.setMobileFiltersOpen
  );
  const mobileFiltersOpen = useSideBarStore((state) => state.mobileFiltersOpen);
  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-700 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-slate-300 py-4 px-4 pb-12 shadow-xl dark:bg-slate-700">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-700 dark:text-slate-200">
                  Filters
                </h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-slate-300 p-2 text-gray-400 dark:bg-slate-800"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <CrossIcon />
                </button>
              </div>
              <Filter />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
