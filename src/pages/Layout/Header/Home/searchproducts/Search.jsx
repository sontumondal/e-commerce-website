import React, { useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Smartphonedetails from "../../../../Products/smartphone/Smartphonedetails";
import { FaSearch } from "react-icons/fa";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
const Search = () => {
  const [searchParam, setSearchParam] = useSearchParams({ limit: 8, skip: 0 });
  const limit = parseInt(searchParam.get("limit") || 0);
  const skip = parseInt(searchParam.get("skip") || 0);
  const q = searchParam.get("q") || "";
  const category = searchParam.get("category") || "";
  
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(`https://dummyjson.com/products/category-list`);
      const data = await res.data;
      // console.log(data);
      
      return data;
    },
  });
  
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", limit, skip, q, category],
    queryFn: async () => {
      let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`;
      if (category) {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      }
      const res = await axios.get(url);
      const data = await res.data;
      // console.log(data)
      return data;
    },
    placeholderData: keepPreviousData,
    staleTime: 20000,
  });
  
  useEffect(()=>{
    document.title=isLoading? "Loading..." :"Your-Store";
  },[isLoading])

  const handleMove = (moveItem) => {
    setSearchParam((prev) => {
      prev.set("skip", Math.max(skip + moveItem, 0));
      return prev;
    });
  };

  return (
    <>
       <Container fluid className="bg-dark">
        <Row className="pt-5">
          <Col className="mt-5">
            <Form>
              <div className="searchinput">
                <input
                  type="text"
                  placeholder="Search here what u want"
                  onChange={debounce((e) =>
                   { setSearchParam((prev) => {
                      prev.delete("category");
                      prev.set("q", e.target.value);
                      return prev;
                    })},1000)
                  }
                />
                <p>
                  <FaSearch />
                </p>
              </div>
            </Form>
            <div className="searchSelect">
              <select
                onChange={(e) => {
                  setSearchParam((prev) => {
                    prev.set("skip", 0);
                    prev.delete("q");
                    prev.set("category", e.target.value);
                    return prev;
                  });
                }}
              >
                <option>Search here by Category wise</option>
                {categories?.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="smartphone">
              {isLoading ? (
                <p style={{ color: "white" }}>Your item is Loading ...</p>
              ) : error ? (
                <p style={{ color: "white" }}>
                  something went wrong ! please check your connection...
                </p>
              ) : product?.products?.length == 0 ? (
                <p style={{ color: "white" }}>
                  Sorry your search item is not available now !
                </p>
              ) : (
                product?.products?.map((item) => (
                  <Smartphonedetails key={item.id} {...item} />
                ))
              )}
            </div>

            <div className="searchLimit">
              <button
                disabled={limit > skip}
                onClick={() => handleMove(-limit)}
              >
                Previous
              </button>
              <p style={{ color: "white" }}>and more......</p>
              <button
                disabled={limit + skip >= product?.total}
                onClick={() => handleMove(limit)}
              >
                Next
              </button>
            </div>
          </Col>
        </Row>
      </Container> 
    </>
  );
};

export default Search;
