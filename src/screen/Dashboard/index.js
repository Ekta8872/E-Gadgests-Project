import React from "react";
import NavBar from "../../components/NavBar";
import IMAGES from "../../theme/Images";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  exploreData,
  homeCarouselData,
  lifeStyleData,
  productData,
} from "../../mockData/Home";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <NavBar />
      <Carousel interval={2000} autoPlay={true} infiniteLoop={true}>
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

      <h1 className="productHeading">Product Categories</h1>
      <div className="productDiv">
        {productData.map?.((item) => {
          return (
            <div>
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
      {/* <div className="manGirlDiv">
        <img className="manGirlImg" src={IMAGES.manWatchImg} />
        <img className="manGirlImg" src={IMAGES.girlPhoneImg} />
      </div> */}
    </div>
  );
};

export default DashBoard;
