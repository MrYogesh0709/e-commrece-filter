import Product from "./Product";
import useGetProducts from "../hook/getProducts";
import Loading from "./Loading";

const ProductsList = () => {
  const [products, loading] = useGetProducts(); //custom hook

  return (
    <div className="lg:col-span-3">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {loading ? (
          <Loading />
        ) : products?.length > 0 ? (
          products.map((product) => {
            return <Product key={product.id} {...product} />;
          })
        ) : (
          <h1 className="flex justify-center items-center h-full dark:text-slate-200">
            No Product Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
