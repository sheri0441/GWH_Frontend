import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FilterBar from "../../../components/FilterBar";
import ErrorMessage from "../../../utils/ErrorMessage";
import ProductsList from "../../../components/ProductsList";
import { Product } from "../../../model/Product";
import PageTitle from "../../../utils/PageTitle";
import ProductListSkeleton from "../ProductListSkeleton";
import axios from "axios";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [numberOfPages, setNumberOfPages] = useState<number>();
  const [currentPageProducts, setCurrentPageProducts] = useState<Product[]>([]);

  const { searchQuery, num } = useParams();

  const currentPage = Number(num) || 1;
  const searchText = searchQuery || "";

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const sort = queryParams.get("sort");

  const fetchData = async () => {
    try {
      const response = await axios({
        url:
          import.meta.env.VITE_API_URL +
          `/products/searchpage/${searchText}/${currentPage}?sort=${sort}`,
      });
      const result = await response.data;

      setNumberOfPages(result.totalPages);

      setCurrentPageProducts(result.list);
    } catch (error) {
      setHasError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, searchText, sort]);

  return (
    <>
      <PageTitle>Search:{searchText}</PageTitle>
      <FilterBar />
      {isLoading ? (
        <ProductListSkeleton />
      ) : hasError ? (
        <ErrorMessage />
      ) : (
        <ProductsList
          productList={currentPageProducts}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          sort={search}
          pageUrl={`/products/search/${searchText}/`}
        />
      )}
    </>
  );
};

export default SearchPage;
