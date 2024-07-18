import { IMG_CDN_URL } from "../contants";

RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating}) => {
    return (
      <>
          <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="Restaurant Image"/>
            <h2>{name}</h2>
            <p>Cuisines : {cuisines.join(" , ")} </p>
            <p>Rating : {avgRating}</p>
          </div>
      </>
    );
  };
export default RestaurantCard