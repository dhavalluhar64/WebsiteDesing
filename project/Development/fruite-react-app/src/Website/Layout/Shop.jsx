import React, { useContext, useState } from "react";

import Footer from "../Comman/Footer";
import Header from "../Comman/Header";
import { CartContext } from "./Store/CartContext";
import { Link } from "react-router-dom";

function Shop() {
  const { allproducts, AddTocart } = useContext(CartContext);

  const [getSearch, setSearch] = useState({
    SearchingData: "",
  });

  const filteringFruit = allproducts.filter(
    (fruite) => fruite.bages === "Fruits"
  );

  // Searching Data
  const SearchingTab = filteringFruit.filter((search) => {
    if (!getSearch.SearchingData) return true;
    if (!search.fruitsname) return false;
    return search.fruitsname
      .toLowerCase()
      .includes(getSearch.SearchingData.toLowerCase());
  });

  // Category

  const CategoryData = () => {
    const Category = {};

    filteringFruit.forEach((itesm) => {
      const categorieCount = itesm.fruitsname;

      if (categorieCount) {
        Category[categorieCount] = (Category[categorieCount] || 0) + 1;
      }
    });

    return Category;
  };

 

  return (
    <div>
      <Header />
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* Single Page Header End */}
      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Fresh fruits shop</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      name="SearchingData"
                      value={getSearch.SearchingData}
                      onChange={(e) =>
                        setSearch({
                          ...getSearch,
                          SearchingData: e.target.value,
                        })
                      }
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
                <div className="col-6" />
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                    >
                      <option value="volvo">Nothing</option>
                      <option value="saab">Popularity</option>
                      <option value="opel">Organic</option>
                      <option value="audi">Fantastic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                          {Object.entries(CategoryData()).map(
                            ([fruit, count]) => (
                              <li key={fruit}>
                                <div className="d-flex justify-content-between fruite-name">
                                  <a href="#">
                                    <i className="fas fa-apple-alt me-2" />
                                    {fruit}
                                  </a>
                                  <span>({count})</span>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input
                          type="range"
                          className="form-range w-100"
                          id="rangeInput"
                          name="rangeInput"
                          min={0}
                          max={500}
                          defaultValue={0}
                          onInput="amount.value=rangeInput.value"
                        />
                        <output
                          id="amount"
                          name="amount"
                          min-velue={0}
                          max-value={500}
                          htmlFor="rangeInput"
                        >
                          0
                        </output>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Additional</h4>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-1"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-1"> Organic</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-2"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-2"> Fresh</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-3"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-3"> Sales</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-4"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-4"> Discount</label>
                        </div>
                        <div className="mb-2">
                          <input
                            type="radio"
                            className="me-2"
                            id="Categories-5"
                            name="Categories-1"
                            defaultValue="Beverages"
                          />
                          <label htmlFor="Categories-5"> Expired</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h4 className="mb-3">Featured products</h4>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: 100, height: 100 }}
                        >
                          <img
                            src="img/featur-1.jpg"
                            className="img-fluid rounded"
                            alt
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">Apple</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: 100, height: 100 }}
                        >
                          <img
                            src="img/featur-2.jpg"
                            className="img-fluid rounded"
                            alt
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">Strawberry</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: 100, height: 100 }}
                        >
                          <img
                            src="img/featur-3.jpg"
                            className="img-fluid rounded"
                            alt
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">Broccoli</h6>
                          <div className="d-flex mb-2">
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star text-secondary" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center my-4">
                        <a
                          href="#"
                          className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                        >
                          Vew More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <img
                          src="img/banner-fruits.jpg"
                          className="img-fluid w-100 rounded"
                          alt
                        />
                        <div
                          className="position-absolute"
                          style={{
                            top: "50%",
                            right: 10,
                            transform: "translateY(-50%)",
                          }}
                        >
                          <h3 className="text-secondary fw-bold">
                            Fresh <br /> Fruits <br /> Banner
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {SearchingTab.length > 0 ? (
                      SearchingTab.map((items, idx) => {
                        const {
                          id,
                          fruitsname,
                          bages,
                          fruitedetials,
                          fruitsImg,
                          price,
                          kg,
                        } = items;
                        return (
                          <Link
                            to={`/shopdetail/${items.id}`}
                            className="col-md-6 col-lg-6 col-xl-4"
                            key={id}
                          >
                            <div className="rounded position-relative fruite-item">
                              <div className="fruite-img">
                                <img
                                  src={fruitsImg}
                                  className="img-fluid w-100 rounded-top"
                                  style={{ height: "214px" }}
                                  alt
                                />
                              </div>
                              <div
                                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, left: 10 }}
                              >
                                {bages}
                              </div>
                              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4>{fruitsname}</h4>
                                <p>{fruitedetials}</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                  <p className="text-dark fs-5 fw-bold mb-0">
                                    ${price} / kg
                                  </p>
                                  <a
                                    href="#"
                                    className="btn border border-secondary rounded-pill px-3 text-primary"
                                    onClick={() => AddTocart(id)}
                                  >
                                    <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })
                    ) : (
                      <p>No Fruite Found</p>
                    )}

                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          «
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End*/}
      <Footer />
    </div>
  );
}

export default Shop;
