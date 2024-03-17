import { useParams } from "react-router-dom";
import ProductList_boilerplate from "../ProductList_boilerplate";

const SearchPage = () => {
  const { searchQuery, num } = useParams();

  const searchText = searchQuery || "";
  const currentPage = Number(num) || 1;

  return (
    <ProductList_boilerplate
      pageTitle={`Search:${searchText}`}
      apiPath={`/products/searchpage/${searchText}/${currentPage}`}
      currentPage={currentPage}
      paginationBaseUrl={`/products/search/${searchText}/`}
    />
  );
};

export default SearchPage;
