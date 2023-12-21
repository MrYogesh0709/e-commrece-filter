import { useEffect } from "react";
import useProductStore from "../store/useProductStore";

const useGetProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const setLoading = useProductStore((state) => state.setLoading);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data?.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [setProducts, setLoading]);
};

export default useGetProducts;
