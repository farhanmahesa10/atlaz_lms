import React, { useEffect, useState } from "react";
import { ProductYCard } from "../../molecules";
import MainLayout from "../../Layout/Mainlayout";
import StarIcon from "../../SVG/StarIcon";
import { BreadCrumb, SliderNoArrow } from "../../atoms";
import { useParams } from "react-router-dom";
import { GET } from "../../../config/RestAPI";
import NumberFormat from "react-number-format";
import { ProductDetailSkeleton } from "../../molecules";

const ProductDetailOrg = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [images, setImages] = useState([]);
  const [subjectFocus, setSubjectFocus] = useState([]);
  const [data, setData] = useState(null);
  const [recomendProduct, setRecomendProduct] = useState([]);

  const [imgCore, setImgCore] = useState("");
  const { id } = useParams();

  const init = () => {
    setIsLoading(true);
    GET("/client/landing/booklist?page=1&perPage=10").then((r) => {
      let result = [];
      r.data.map((r, i) => {
        if (r._id === id) {
          setData(r);
        }
        result.push(
          <ProductYCard
            key={i}
            data={r}
            linkGoTo={`/product-detail/${r._id}`}
            responsiveClass="card-product-y-mob md-card-product-y-tab xl-card-product-y-desk cursor-pointer"
          />
        );
      });
      GET(`/client/landing/booklist/${id}`).then((r) => {
        setImgCore(r.data.images[0]);
        setData(r.data);
        setImages(r.data.images);
        setSubjectFocus(r.data.subjectFocus.split(";"));
      });
      setRecomendProduct(result);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    init();
  }, [id]);

  const breadcrumbsData = [
    {
      link: "/home",
      label: "Home",
    },
    {
      link: "/search-result/asdsad",
      label: "Book List",
    },
    {
      label: data ? data.name : "",
    },
  ];

  const [feature, setFeature] = useState([
    {
      title: "Cefr Level",
      subTitle: "A1",
      color: "#B3FFFF",
    },
    {
      title: "Completion",
      subTitle: "Certificate",
      color: "#B3FFFF",
    },
    {
      title: "Videos",
      subTitle: "Lecturer",
      color: "#B2FFCC",
    },
    {
      title: "Videos",
      subTitle: "Animation",
      color: "#D9B2FF",
    },
    {
      title: "Self Learning",
      subTitle: "Method",
      color: "#D9FFB2",
    },
    {
      title: "Online learning",
      subTitle: "Integration",
      color: "#FFB2D9",
    },
  ]);
  const createMarkup = (str) => {
    return { __html: str };
  };

  return (
    <>
      <MainLayout>
        {!isLoading && data !== null ? (
          <>
            <div className="row gx-0 justify-content-center">
              <div style={{ maxWidth: "1440px" }}>
                <div className=" m-24 md-m-32 xl-mx-186">
                  <div className="d-none d-xl-block mb-32">
                    <BreadCrumb data={breadcrumbsData} />
                  </div>
                  <div className="row gx-0 justify-content-center">
                    <div className="col-12 md-w-430 mb-24  md-mb-40 col-xl-4  d-flex  flex-column ">
                      <div className=" mb-8 arranged-image ">
                        <img src={imgCore} className="img-fluid  " alt="" />
                      </div>
                      <div className="w-p-100 d-grid grid-cols-4  gap-2 align-items-center ">
                        {images.map((res, i) => {
                          return (
                            <div className="w-p-100" key={i}>
                              <img
                                src={res}
                                className="w-p-100 h-auto  cursor-pointer"
                                onClick={(e) => {
                                  setImgCore(e.target.src);
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-xl-1"></div>
                    <div className=" col-12 md-px-104 xl-px-0 mb-56 md-mb-72 col-xl">
                      <div className="mt-5">
                        <p className="mb-12">
                          <span className="border radius-4 px-8 py-4 border-neutral-300 text-neutral-300">
                            Book on promo
                          </span>
                        </p>
                        <h3 className="h4 md-h3">{data.name}</h3>

                        <div className="d-flex mb-30 xl-mb-38 align-items-center  ">
                          <p className="font-sm md-font-normal text-neutral-300 mr-8">
                            {data.author}
                          </p>
                          <div className="d-flex align-items-center">
                            <StarIcon size="10" />
                            <StarIcon size="10" />
                            <StarIcon size="10" />
                            <StarIcon size="10" />
                            <StarIcon size="10" isHalf />
                            <span className="fs-9">&nbsp; 5.0/5.0</span>
                          </div>
                        </div>
                        <div className="mb-30 xl-mb-38">
                          <p
                            className="text-neutral-400 font-xs md-font-sm xl-font-normal "
                            style={{ textAlign: "justify" }}
                            dangerouslySetInnerHTML={createMarkup(
                              data.overview
                            )}
                          ></p>
                        </div>
                        <div>
                          <p>Promo Price</p>
                          <div className="d-flex gap-2 align-items-center ">
                            <h5 className="h5 md-h3 xl-h2 text-success-500 ">
                              <NumberFormat
                                value={data.discountPrice.total}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Rp"}
                              />
                              <s className="font-sm text-neutral-300 ml-8">
                                <NumberFormat
                                  value={data.originalPrice}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"Rp"}
                                />
                              </s>
                            </h5>
                            <p className="bg-danger-100 text-danger-500 px-8 py-4 font-xs md-font-sm-medium md-font-medium radius-4 border-danger-500 border ">
                              {Math.round(data.discountPrice.discountPercent)}%
                              off
                            </p>
                          </div>
                        </div>
                        <div className="mt-16">
                          <p>This book include:</p>
                          <div className="mt-6">
                            <label className="bg-neutral-400 radius-4 px-8 py-4 mr-8 ">
                              <i className="bi bi-laptop text-white"></i>
                              <span className="text-sm text-white ml-8">
                                E-learning
                              </span>
                            </label>
                            <label className="bg-neutral-400 radius-4 px-8 py-4">
                              <i className="bi bi-person-video text-white"></i>
                              <span className="text-sm text-white ml-8">
                                Video lecturer
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="mt-34 row gx-0 ">
                          <div className="col-12">
                            <button
                              className="btn-primary w-full font-xs md-font-sm xl-font-normal"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#modalBuy"
                            >
                              Buy from e-commerce
                            </button>
                          </div>
                          <div className="col-12 mt-20 d-md-flex align-items-center">
                            <button className="btn-outline  text-neutral-500 font-xs md-font-sm xl-font-normal w-full md-w-185">
                              Contact marketing
                            </button>
                            <span className="font-xs text-neutral-300 pl-8 ">
                              <i className="bi bi-exclamation-circle mx-8 text-neutral-300 "></i>
                              Suitable for school curriculum and mass purchase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12  md-px-104 xl-px-0">
                      <div className="xl-mx-32">
                        <div className="mb-16">
                          <p className="h5 xl-h4 ">Subject Focus</p>
                          <div className="rectangle w-64 bg-primary-500 h-2 "></div>
                        </div>
                        <div className="text-danger">
                          {subjectFocus.map((r, i) => {
                            return (
                              <button
                                className="btn-outline text-neutral-500 font-xs xl-font-sm mb-8 mr-8"
                                key={i}
                              >
                                {r}
                              </button>
                            );
                          })}
                        </div>
                        <div className="mt-68 xlmt-88">
                          <div className="mb-16">
                            <p className="h5 xl-h4 ">Book Features </p>
                            <div className="rectangle w-64 bg-primary-500 h-2 "></div>
                          </div>
                          <div className="  row  gx-0">
                            {feature.map((r) => {
                              return (
                                <div
                                  className="col-6 col-md-4 col-xl-2 mb-16"
                                  key={Math.random()}
                                >
                                  <div className="m-0 d-flex align-items-center ">
                                    <div
                                      className="w-8 h-8 radius-p-100 mr-12 "
                                      style={{ backgroundColor: r.color }}
                                    ></div>
                                    <p className="text-neutral-200 m-0 font-size-12">
                                      {r.title}
                                    </p>
                                  </div>
                                  <div className="m-0 d-flex align-items-center ">
                                    <div className="w-8 h-8 radius-p-100 mr-12"></div>
                                    <p className="text-neutral-500 m-0  font-size-16 fw-medium">
                                      {r.subTitle}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="mt-48">
                          <div className="mb-16">
                            <p className="h5 xl-h4 ">Other recommendation</p>
                            <div className="rectangle w-64 bg-primary-500 h-2 "></div>
                          </div>
                          <SliderNoArrow
                            wDefault={4}
                            w1035={2}
                            w980={2}
                            w768={2}
                            content={recomendProduct}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade "
                  id="modalBuy"
                  tabIndex="-1"
                  aria-labelledby="modalBuyLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16">
                      <div className="modal-header">
                        <h6 className="modal-title md-h5" id="modalBuyLabel">
                          Choose the marketplace
                          <p className="font-xs md-font-sm">
                            Deliver our book from our marketplace partnership
                          </p>
                        </h6>
                      </div>
                      <div className="modal-body px-24  ">
                        <div>
                          <button className="btn-secondary mb-16  md-py-16 w-full d-flex">
                            <img
                              src="/icons/tokped.png"
                              alt=""
                              className="pr-17"
                            />
                            <div className="d-flex justify-content-between w-full">
                              <p className="font-medium mr-48">
                                Buy from{" "}
                                <span className="font-bold">Tokopedia</span>
                              </p>
                              <i className="bi bi-chevron-right "></i>
                            </div>
                          </button>
                          <button className="btn-secondary mb-16  md-py-16 w-full d-flex">
                            <img
                              src="/icons/shopee.png"
                              alt=""
                              className="pr-17"
                            />
                            <div className="d-flex justify-content-between w-full">
                              <p className="font-medium mr-48">
                                Buy from{" "}
                                <span className="font-bold">Shopee</span>
                              </p>
                              <i className="bi bi-chevron-right "></i>
                            </div>
                          </button>
                          <button className="btn-secondary mb-16  md-py-16 w-full d-flex">
                            <img
                              src="/icons/bukalapak.png"
                              alt=""
                              className="pr-17"
                            />
                            <div className="d-flex justify-content-between w-full">
                              <p className="font-medium mr-48">
                                Buy from{" "}
                                <span className="font-bold">Bukalapak</span>
                              </p>
                              <i className="bi bi-chevron-right "></i>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ProductDetailSkeleton />
        )}
      </MainLayout>
    </>
  );
};

export default ProductDetailOrg;
