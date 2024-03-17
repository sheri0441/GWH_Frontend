import { useParams } from "react-router-dom";
import ProductList_boilerplate from "./ProductList_boilerplate";

const CategoryPage = () => {
  const { num } = useParams();
  const currentPage = Number(num) || 1;

  return (
    <ProductList_boilerplate
      pageTitle="Products"
      apiPath={`/products/page/${currentPage}`}
      currentPage={currentPage}
      paginationBaseUrl="/products/page/"
    />
  );
};

export default CategoryPage;
