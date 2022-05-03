import React, { useEffect, useState } from "react";
import { CarouselHero, SearchDropdown } from "../../atoms";
import { blibli, shopee, buka, tokped, gram } from "../../../assets/images";
import { GET } from "../../../config/RestAPI";
import { HomeHeadSkeleton } from "../../molecules";

const HomeHead = () => {
  const [searchData, setSearchData] = useState([]);
  const [img, setImg] = useState([]);
  const [imgPhone, setImgPhone] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let tempImg = [];
    let tempImgPhone = [];
    GET("/client/landing/hero").then((r) => {
      r.data.map((res) => {
        tempImg.push(res.imageLarge);
        tempImgPhone.push(res.imageSmall);
      });
      setImg(tempImg);
      setImgPhone(tempImgPhone);
      setIsLoading(false);
    });
  }, []);

  const handleSearchChange = (val) => {
    return new Promise((resolve) => {
      GET("/client/landing/booklist/search?keyword=" + val).then((r) => {
        let result = r.data.map((r) => {
          return { value: r.name, label: r.name };
        });

        resolve(result);
      });
    });
  };
  return (
    <>
      {isLoading ? (
        <HomeHeadSkeleton />
      ) : (
        <div className="bg-secondary-100 px-24 md-px-48 pb-16 md-pb-24">
          <div className=" m-auto " style={{ maxWidth: "1440px" }}>
            <div className="mb-16 pt-16 d-flex justify-content-center ">
              <div style={{ width: "432px" }}>
                <SearchDropdown
                  handleSearchChange={handleSearchChange}
                  submitLink="/search-result"
                />
              </div>
            </div>
            <div className="mb-16 md-mb-40 ">
              <CarouselHero img={img} imgPhone={imgPhone} />
            </div>
            <div className="text-center  mb-16 md-mb-20">
              <h6 className="">Trusted on 10+ Marketplace</h6>
              <span className="mt-2"></span>
              <div className="d-flex justify-content-center">
                <div className="rectangle h-2  w-64 bg-primary-500"></div>
              </div>
            </div>
            <div className="row gx-0  text-center justify-content-center">
              <div className="col h-22 md-h-40 xl-h-45">
                <img src={buka} alt="" className="h-p-100" />
              </div>
              <div className="col h-22 md-h-40 xl-h-45">
                <img src={gram} alt="" className="h-p-100" />
              </div>
              <div className="col h-22 md-h-40 xl-h-45">
                <img src={shopee} alt="" className="h-p-100" />
              </div>
              <div className="col h-22 md-h-40 xl-h-45">
                <img src={blibli} alt="" className="h-p-100" />
              </div>
              <div className="col h-22 md-h-40 xl-h-45">
                <img src={tokped} alt="" className="h-p-100" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeHead;
