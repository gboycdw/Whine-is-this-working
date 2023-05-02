import { useQuery } from "react-query";
import {
  getAllProducts,
  getProductsByIsBest,
  getProductsByIsPicked,
} from "../api/api-product";
import Error from "../components/UI/error";
import Loading from "../components/UI/loading";
import MainArticle from "../components/user/main/main-article";
import MainItem from "../components/user/main/main-item";
import OurPick from "../components/user/main/ourpick";

const MainPage = () => {
  const {
    data: pickedProducts,
    isLoading: pickedProductsIsLoading,
    error: pickedProductsError,
    isError: pickedProductsIsError,
  } = useQuery("PickedProducts", async () => await getProductsByIsPicked());

  const {
    data: bestProducts,
    isLoading: bestIsLoading,
    error: bestProductsError,
    isError: bestProductsIsError,
  } = useQuery("bestProducts", async () => await getProductsByIsBest());

  const {
    data: newstProducts,
    isLoading: newstProductsIsLoading,
    error: newstProductsError,
    isError: newstProductsIsError,
  } = useQuery("newstProducts", async () => await getAllProducts());

  return (
    <div className="flex flex-col">
      <img
        className="max-w-none w-screen ml-[calc(-50vw+50%)]"
        src="banner.jpeg"
        alt="banner"
      />
      <>
        <div className="relative">
          {bestIsLoading ? (
            <Loading />
          ) : !bestProductsIsError ? (
            <OurPick pickedProducts={pickedProducts} />
          ) : (
            <Error error={pickedProductsError} />
          )}
        </div>
        <div className="relative">
          {pickedProductsIsLoading ? (
            <Loading />
          ) : !pickedProductsIsError ? (
            <MainItem title={"BEST"} products={bestProducts} />
          ) : (
            <Error error={bestProductsError} />
          )}
        </div>
        <div className="relative">
          {newstProductsIsLoading ? (
            <Loading />
          ) : !newstProductsIsError ? (
            <MainItem title={"NEW ARRIVAL"} products={newstProducts} />
          ) : (
            <Error error={newstProductsError} />
          )}
        </div>
        <MainArticle />
      </>
    </div>
  );
};

export default MainPage;
