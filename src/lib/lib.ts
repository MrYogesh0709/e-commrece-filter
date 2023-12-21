export const PRODUCT_TITLE_LENGTH = 20;

export const formatPrice = (price: number | bigint): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
type Sort = {
  name: string;
  sort: "price" | "rating";
  order: "asc" | "desc";
  current: boolean;
};

type SortOptions = Sort[];

export const sortOptions: SortOptions = [
  { name: "Rating:Low to High", sort: "rating", order: "desc", current: false },
  {
    name: "Price: Low to High",
    sort: "price",
    order: "asc",
    current: false,
  },
  {
    name: "Price: High to Low",
    sort: "price",
    order: "desc",
    current: false,
  },
];
