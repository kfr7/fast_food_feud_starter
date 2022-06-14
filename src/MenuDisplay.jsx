import * as React from "react"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"


export function MenuDisplay(props) {

  return (
    <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {props.currentMenuItems.map((item, idx) => (
            <Chip 
            key={idx} 
            label={item.item_name} 
            isActive={item === props.currMenuItem} 
            onOpen={() => {
              if (item !== props.currMenuItem)
              {
                props.setCurrMenuItem(item);
              }
            }}
            onClose={() => {
              if (item === props.currMenuItem)
              {
                props.setCurrMenuItem(null);
              }
            }}
             />
          )

          )}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            <NutritionalLabel item={props.currMenuItem}/>
          </div>
        </div>
  )
}

export default MenuDisplay
