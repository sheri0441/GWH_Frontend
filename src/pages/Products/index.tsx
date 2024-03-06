import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Product } from "../../model/Product";
import PageTitle from "../../utils/PageTitle";
import FilterBar from "../../components/FilterBar";
import ErrorMessage from "../../utils/ErrorMessage";
import ProductsList from "../../components/ProductsList";
import ProductListSkeleton from "./ProductListSkeleton";
import axios from "axios";

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [numberOfPages, setNumberOfPages] = useState<number>();
  const [currentPageProducts, setCurrentPageProducts] = useState<Product[]>([]);

  const { num } = useParams();
  const currentPage = Number(num) || 1;

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const sort = queryParams.get("sort");

  const fetchData = async () => {
    try {
      const response = await axios({
        url:
          import.meta.env.VITE_API_URL +
          `/products/page/${currentPage}?sort=${sort}`,
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
  }, [currentPage, sort]);

  return (
    <>
      <PageTitle>Products</PageTitle>
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
          pageUrl="/products/page/"
        />
      )}
    </>
  );
};

export default CategoryPage;
