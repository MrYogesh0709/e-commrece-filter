import useGetCategory from "../hook/getCategory";
import CheckBox from "./CheckBox";
import Loading from "./Loading";

const CategoryItem = () => {
  const [category, loading] = useGetCategory();

  if (loading) {
    return <Loading />;
  }
  return (
    category.length > 0 &&
    category.map((item, index) => {
      return <CheckBox item={item} key={index} />;
    })
  );
};

export default CategoryItem;
