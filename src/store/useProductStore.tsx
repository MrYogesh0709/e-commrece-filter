import { create } from "zustand";
import { products } from "../fakeData";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
type SortType = {
  sort: "price" | "rating";
  order: "asc" | "desc";
};
type FilterType = {
  minPrice: number;
  maxPrice: number;
};
type ProductStore = {
  products: Product[];
  filteredProduct: Product[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setProducts: (products: Product[]) => void;
  sortProducts: (type: SortType) => void;
  setFilterProductsOnRange: (filter: FilterType) => void;
  filterProductsOnCategory: (category: string[]) => void;
  setFilterProductsOnSearch: (search: string) => void;
};

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  setLoading: (loading) => set({ loading }),
  setProducts: (products) => set({ products }),
  filteredProduct: [...products],
  sortProducts: (type: SortType) => {
    set((state) => {
      const sortedProducts = [...state.products];
      const { sort, order } = type;
      sortedProducts.sort((a, b) => {
        if (order === "asc") {
          return a[sort] <= b[sort] ? -1 : 1;
        } else {
          return a[sort] >= b[sort] ? -1 : 1;
        }
      });
      return { products: sortedProducts };
    });
  },
  setFilterProductsOnRange: ({ minPrice, maxPrice }) => {
    set((state) => {
      const filteredProducts = state.filteredProduct.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      return { ...state, products: filteredProducts };
    });
  },
  filterProductsOnCategory: (categories) => {
    set((state) => {
      if (categories.length === 0) {
        return { products: state.filteredProduct };
      }
      const filteredProducts = state.filteredProduct.filter((product) =>
        categories.includes(product.category)
      );
      return { ...state, products: filteredProducts };
    });
  },
  setFilterProductsOnSearch: (search) => {
    set((state) => {
      const filteredProducts = state.filteredProduct.filter((item) => {
        return `${item.title} ${item.category} ${item.brand}`
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      return { ...state, products: filteredProducts };
    });
  },
}));

export default useProductStore;
