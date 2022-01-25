import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link, useNavigate } from "react-router-dom";
const SearchDropdown = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [searchRecomend, setSearchRecomend] = useState(props.searchRecomend);
  const inputRef = useRef(null);
  useEffect(() => {
    setSearchRecomend(props.searchRecomend);
  }, [props.searchRecomend]);

  let navigate = useNavigate();
  const handleSearch = () => {
    setShowPopup(true);
  };
  const handleClickAway = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
    props.onChange(e.target.value);
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(props.submitLink + "/" + keyword);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <form action="" onSubmit={handleSubmit}>
        <div className=" ">
          <div className="input-group mt-24  w-full book-shadow ">
            <span
              className="btn bg-white radius-l-8  d-flex align-items-center pl-25  border-top border-bottom border-start  "
              type="button"
            >
              <i className="bi bi-search text-neutral-200 "></i>
            </span>
            <input
              onFocus={handleSearch}
              type="text"
              ref={inputRef}
              className="form-control py-16 border-top border-bottom border-top"
              placeholder="Search anything here"
              style={{ borderRight: "none" }}
              onChange={handleChange}
            />
            <span
              className="btn bg-white radius-r-8 font-size-27 text-neutral-200 border-top border-bottom  border-end pr-35"
              type="button"
            >
              &times;
            </span>
            <div style={{ width: "100%" }}>
              {showPopup ? (
                <div
                  style={{ zIndex: 99 }}
                  className="bg-white text-center radius-8 mt-8 position-absolute book-shadow   w-full  py-24 text-neutral-300 font-size-14"
                >
                  {searchRecomend.length < 1 ? (
                    <div className="m-0 px-24">
                      You can search by book name or any keyword here. Try
                      "Simple past tense"
                      <hr />
                    </div>
                  ) : (
                    searchRecomend.map((r, i) => {
                      return (
                        <Link
                          key={i}
                          to={r.link}
                          className="font-size-16  pr-11 h-40 hover-bg-neutral-50 cursor-pointer  px-24 d-flex align-items-center "
                        >
                          <i className="bi bi-search text-neutral-200 pr-12"></i>
                          {r.text}
                        </Link>
                      );
                    })
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
    </ClickAwayListener>
  );
};
export default SearchDropdown;
