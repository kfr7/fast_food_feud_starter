import * as React from "react"
import Chip from "./components/Chip/Chip"

export function RestaurantsRow(props) {

  return (
    <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {props.restaurants.map((restaurant, idx) => (
              <Chip 
              key={idx} 
              label={restaurant} 
              isActive={restaurant === props.currRestaurant} 
              onOpen={() => {
                if (restaurant !== props.currRestaurant)
                {
                  props.setCurrRestaurant(restaurant);
                  props.setCurrMenuItem(null);
                }
              }}
              onClose={() => {
                if (restaurant === props.currRestaurant)
                {
                  props.setCurrRestaurant(null);
                  props.setCurrMenuItem(null);
                }
              }} />
            ))}
          </div>
        </div>
  )
}

export default RestaurantsRow
