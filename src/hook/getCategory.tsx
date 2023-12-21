import { useEffect, useState } from "react";

const useGetCategory = () => {
  const [category, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.log(error || "something went wrong");
        setLoading(false);
      }
    };
    getData();
  }, []);
  return [category, loading] as const;
};

export default useGetCategory;
