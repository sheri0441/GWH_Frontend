import { useParams } from "react-router-dom";
import ProductList_boilerplate from "../ProductList_boilerplate";

const CategoryPage = () => {
  const { category, num } = useParams();

  const categoryText = category || "";
  const currentPage = Number(num) || 1;

  return (
    <ProductList_boilerplate
      pageTitle={`Category: ${categoryText.split(",").join(", ")}`}
      apiPath={`/products/category/${categoryText}/${currentPage}`}
      currentPage={currentPage}
      paginationBaseUrl={`/products/category/${categoryText}/`}
    />
  );
};

export default CategoryPage;
