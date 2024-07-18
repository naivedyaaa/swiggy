import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../contants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantsShow, setRestaurantsShow] = useState(restaurants);
  const [allRestaurants,setAllRestaurants] = useState()

  //Searching Restaurants
  function filterData(searchText,allRestaurants) {
    const filterData = allRestaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    return filterData;
  }

  //API fetch
  async function dataGet(){
    const datapromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const dataset = await datapromise.json();
    setRestaurantsShow(dataset?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setAllRestaurants(dataset?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  //useEffect hook for calling API fetch function
  useEffect(()=>{
    dataGet()
    console.log("Hello")
  },[]);
  

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          data = filterData(searchText,allRestaurants);
          setRestaurantsShow(data);
        }}
      >
        Search
      </button>
      {(allRestaurants === undefined)?(<Shimmer/>):<div className="restaurantList">
        {restaurantsShow.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
          );
        })}
      </div>}
    </>
  );
};

export default Body;
