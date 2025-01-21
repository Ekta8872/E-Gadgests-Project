import React from "react";
import NavBar from "../../components/NavBar";
import { useSelector, useDispatch } from "react-redux";

const FavList = () => {
  const Favorite = useSelector((state) => state.Favorite);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
      {Favorite.length > 0 ? (
        <div className="storeProductsDiv">
          {Favorite.map((item) => (
            <div className="storeimgTextDiv" key={item.id}>
              <div
                // onClick={() => dispatch(addFavorite(item))}
                className="favImgDiv"
              >
                <img className="favoriteImg" src={item.favoriteImg} />
              </div>
              <img className="storeImg" src={item.image} alt={item.name} />
              <p className="storeHeading">{item.name}</p>
              <p>
                {item.price}
                <s className="strikePrice">{item.actualPrice}</s>
              </p>
              <button
                className="cartBtn"
                // onClick={() => dispatch(removeItem(item))}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="emptyCartText">No items are in the wishList</p>
      )}
    </div>
  );
};
export default FavList;
