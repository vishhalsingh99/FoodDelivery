export const RestaurantCard = ({restaurant}) => {
  const {name, locality, areaName, costForTwo, cuisines, sla, cloudinaryImageId} = restaurant.info;
  const {deliveryTime, lastMileTravel } = sla;
  
   return (
 <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden w-full max-w-xs mx-auto my-4">
      <img
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{locality}, {areaName}</p>
        <p className="text-sm text-gray-700 font-medium">💰 {costForTwo}</p>
        <p className="text-sm text-gray-700 truncate">🍽️ {cuisines.join(', ')}</p>
        <div className="flex justify-between text-sm text-gray-500 pt-1">
          <span>🕒 {sla.deliveryTime} mins</span>
          <span>📍 {sla.lastMileTravel} km</span>
        </div>
      </div>
    </div>

   )
}