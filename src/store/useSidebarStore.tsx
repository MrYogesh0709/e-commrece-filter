import { create } from "zustand";
type SideBarStore = {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (status: boolean) => void;
};

const useSideBarStore = create<SideBarStore>((set) => ({
  mobileFiltersOpen: false,
  setMobileFiltersOpen: (status) => set({ mobileFiltersOpen: status }),
}));

export default useSideBarStore;
