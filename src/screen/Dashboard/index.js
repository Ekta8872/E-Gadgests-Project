import React from "react";
import NavBar from "../../components/NavBar";
// import IMAGES from "../../theme/Images";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  exploreData,
  homeCarouselData,
  lifeStyleData,
  productData,
  categoryShopData,
  tVCarouselData,
  laptopCarouselData,
} from "../../mockData/Home";

import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleImageClick = (path) => {
    navigate(`/product/${path}`);
  };
  return (
    <div>
      <NavBar />
      <Carousel
        interval={2000}
        autoPlay={true}
        infiniteLoop={true}
        className="carouselDiv"
      >
        {homeCarouselData?.map((item, index) => {
          return <img className="homeImg" src={item.image} />;
        })}
      </Carousel>
      <h1 className="productHeading">Explore Products </h1>
      <div className="exploreDiv">
        {exploreData.map?.((item) => {
          return (
            <div>
              {/* <button onClick={handleOnClick}> */}
              <img className="exploreImg" src={item.image} alt="" />
              {/* </button> */}
              <p className="productName">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p className="tribeHeading">Shop by Categories</p>
      </div>
      <div className="categoryShopDataDiv">
        {categoryShopData?.map((item, index) => {
          return (
            <div className="categoryShopInnerDiv">
              <img className="categoryShopImg" src={item?.image} />
              <p className="categoryName">{item?.name}</p>
            </div>
          );
        })}
      </div>
      <h1 className="productHeading">Product Categories</h1>
      <div className="productDiv">
        {productData.map((item) => {
          return (
            <div onClick={() => handleImageClick(item.path)} key={item.id}>
              <img className="productImg" src={item.image} />
              <p className="productName">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div class="lifeStyleDiv">
        <h2 class="productHeading">LifeStyle </h2>
        <div class="lifeStyleImgDiv">
          {lifeStyleData.map?.((item) => {
            return (
              <div className="imgHeadingLDiv">
                <img className="lifeStyleImg" src={item.image} />
                <p className="pLText">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Carousel
        interval={2000}
        autoPlay={true}
        infiniteLoop={true}
        className="tVcarouselDiv"
      >
        {tVCarouselData?.map((item, index) => {
          return <img className="tVImg" src={item.image} />;
        })}
      </Carousel>
      {/* //LaptopCarousel */}
      <Carousel
        interval={2000}
        autoPlay={true}
        infiniteLoop={true}
        className="tVcarouselDiv"
      >
        {laptopCarouselData?.map((item, index) => {
          return <img className="tVImg" src={item.image} />;
        })}
      </Carousel>
    </div>
  );
};

export default DashBoard;
