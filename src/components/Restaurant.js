import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG_CDN_URL, RESTAURANT_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
const Restaurant = () => {
  // this name -->"id" will be same as the "/:id" that we give in path
  let { id } = useParams();
  const [restaurantData, setRestaurantData] = useState();

  //fetch restaurant detail API
  async function restaurantFetch() {
    const data = await fetch(RESTAURANT_CDN_URL + id);
    const json = await data.json();
    setRestaurantData(json);
    return json;
  }
  useEffect(() => {
    restaurantFetch();
    console.log(restaurantData?.data.cards[0]?.card?.card?.info?.name);
  }, []);
  
  
  return restaurantData === undefined ? (
    <Shimmer />
  ) : (
    <>
      <h1 style={{ textAlign: "center", marginTop: "60px", fontSize: "40px" }}>
        {restaurantData?.data?.cards[0]?.card?.card?.info?.name}
      </h1>
      <h3 style={{ textAlign: "center", marginTop: "20px"}}>
        {restaurantData?.data?.cards[0]?.card?.card?.info?.areaName}
      </h3>
      <h3 style={{ textAlign: "center", marginTop: "20px"}}>
        {restaurantData?.data?.cards[0]?.card?.card?.info?.slugs?.city.toUpperCase()}
      </h3>
      <h3 style={{ textAlign: "center", marginTop: "20px"}}>
        {"Rating : "+restaurantData?.data?.cards[0]?.card?.card?.info?.avgRating + " stars"}
      </h3>
      <h3 style={{ textAlign: "center", marginTop: "20px"}}>
        {restaurantData?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </h3>

      {restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.map(
        (elem, index) => {
          //   console.log(e.card.card.itemCards[1].card.info.name);
          return elem.card.card.itemCards === undefined ? null : (
            <>
              {elem.card.card.itemCards.map((e) => {
                return (
                  <div key={e.card.info.id} className="restaurantMenu">
                    <span>{e.card.info.name}</span>
                    <img
                      src={MENU_IMG_CDN_URL + e.card.info.imageId}
                      alt="Tasty"
                    />
                  </div>
                );
              })}
            </>
          );
        }
      )}
    </>
  );
};

export default Restaurant;
