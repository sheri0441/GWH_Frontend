import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import { Product } from "../../model/Product";
import PageTitle from "../../utils/PageTitle";
import ErrorMessage from "../../utils/ErrorMessage";
import ProductsList from "../../components/ProductsList";
import ProductListSkeleton from "./ProductListSkeleton";

const ProductList_boilerplate = ({
  pageTitle,
  apiPath,
  currentPage,
  paginationBaseUrl,
}: {
  pageTitle: string;
  apiPath: string;
  currentPage: number;
  paginationBaseUrl: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [numberOfPages, setNumberOfPages] = useState<number>();
  const [currentPageProducts, setCurrentPageProducts] = useState<Product[]>([]);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const sort = queryParams.get("sort");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: import.meta.env.VITE_API_URL + apiPath + `?sort=${sort}`,
      });
      const result = response.data;

      setNumberOfPages(result.totalPages);

      setCurrentPageProducts(result.list);
    } catch (error) {
      setHasError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [apiPath, sort]);
  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
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
          pageUrl={paginationBaseUrl}
        />
      )}
    </>
  );
};

export default ProductList_boilerplate;
