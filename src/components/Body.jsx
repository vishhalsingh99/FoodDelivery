import resData from "../data/restaurantData.json";
import { RestaurantCard } from "./RestaurantCard";
import About from "./About";


export const Body = () => {
  return (
<div className="body-container px-4 py-6 max-w-7xl mx-auto">
  {/* Search Bar */}
  <div className="search-bar mb-6">
    <input
      type="text"
      placeholder="Search restaurants..."
      className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  <About/>

  {/* Restaurant Cards Grid */}

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
  {resData.map((restaurant) => (
    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
  ))}
</div>

  </div>


  );
};