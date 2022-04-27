import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseAPIURL, GET } from "../../config/RestAPI";
const useSearchResult = () => {
  const breadcrumbsData = [
    {
      link: "/shop",
      label: "Shop",
    },
    {
      link: "",
      label: "Book List",
    },
  ];

  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [searchData, setSearchData] = useState([]);
  const [bookData, setBookData] = useState([]);

  const [pagination, setPagination] = useState({});

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const [sortData, setSortData] = useState([
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
    { value: "Lowest Price", label: "Lowest Price" },
    { value: "Highest Price", label: "Highest Price" },
  ]);

  const [levelChoosen, setLevelChoosen] = useState([]);
  const [sortChoosen, setSortChoosen] = useState("Ascending");

  const levelData = [
    { value: "Elementary", label: "Elementary" },
    { value: "Junior High School", label: "Junior High School" },
    { value: "Senior High School", label: "Senior High School" },
  ];

  const handleLevelChange = (selected) => {
    let result = [];
    for (const r of selected) {
      result.push(r.value);
    }

    setLevelChoosen(result);
  };

  const [showFilter, setShowFilter] = useState(false);

  const handleChange = (e) => {
    GET("/client/landing/booklist/search?keyword=" + e.target.value).then(
      (r) => {
        setSearchData(r.data);
      }
    );
  };

  const getBookResult = (page = 1, perPage = 2) => {
    setIsLoading(true);
    let url = `${BaseAPIURL}/client/landing/booklist/filter`;
    let req = {
      keyword: keyword,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sort: sortChoosen,
      level: levelChoosen,
      page,
      perPage,
    };

    GET(url, { params: req }).then((response) => {
      setBookData(response.data);
      setPagination(response.paginate);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getBookResult();
  }, [keyword, minPrice, maxPrice, sortChoosen, levelChoosen]);

  return {
    breadcrumbsData,
    keyword,
    isLoading,
    setIsLoading,
    searchData,
    setSearchData,
    bookData,
    setBookData,
    pagination,
    setPagination,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sortData,
    setSortData,
    levelChoosen,
    setLevelChoosen,
    sortChoosen,
    setSortChoosen,
    levelData,
    handleLevelChange,
    showFilter,
    setShowFilter,
    handleChange,
    getBookResult,
  };
};

export default useSearchResult;