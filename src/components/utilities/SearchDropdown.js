import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link, useNavigate } from "react-router-dom";
import { InputComponent } from "..";
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

  const handleChange = (val) => {
    setKeyword(val);
    props.onChange(val);
    setShowPopup(true);
  };

  const handleClear = () => {
    setKeyword("");
    console.log(keyword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(props.submitLink + "/" + keyword);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <form action="" onSubmit={handleSubmit}>
        <div className=" ">
          <InputComponent
            labelClassName="font-xs-bold"
            placeholder="Search book name or author"
            icon={<i className="bi bi-search text-neutral-400"></i>}
            onChange={handleChange}
            icon2={
              <span
                className={`text-neutral-200 pr-16 cursor-pointer ${
                  !showPopup ? "d-none" : "d-block"
                }`}
                onClick={handleClear}
              >
                &times;
              </span>
            }
          />
          <div className="input-group  w-full book-shadow  ">
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
