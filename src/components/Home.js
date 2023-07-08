import React, { useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { getProducts } from "../actions/productActions";
import Products from "./products/Products";
import Loader from "../components/layouts/Loader";

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { error, loading, products, productCount, resultsPerPage } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Buy Best Product Online"} />
          <div className="Home">
            <div className="row mt-5">
              <div className="col">
                <h2>Latest Products</h2>
              </div>
            </div>

            {/* //BACKEND DATA */}

            <div className="row mt-4">
              <div className="col-md-1"></div>
              {products &&
                products.slice(0, 5).map((product) => (
                  <div key={product._id} className="col-md-2">
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                        height: "100%",
                      }}
                    >
                      <Products product={product} />
                    </div>
                  </div>
                ))}
            </div>

            <div className="row mt-4">
              <div className="col-md-1"></div>
              {products &&
                products.slice(5, 10).map((product) => (
                  <div key={product._id} className="col-md-2">
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                        height: "100%",
                      }}
                    >
                      <Products product={product} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {resultsPerPage <= productCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultsPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
