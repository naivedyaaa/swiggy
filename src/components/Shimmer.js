const ShimmerCard = () => {
  return (
    <>
      <div className="card">
        <div className="cardShimmer"></div>
        <div className="descShimmer"></div>
        <div className="descShimmer"></div>
        <div className="descShimmer"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
    console.log("in shimmer outside return")
    return (
        <div className="restaurantList">
          {Array(12).fill("").map((e,index)=>(<ShimmerCard key={index}/>))}
        </div>
  );
};
export default Shimmer;
