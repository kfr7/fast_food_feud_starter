import * as React from "react"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
// IMPORT ANY NEEDED COMPONENTS HERE (above)
import { createDataSet } from "./data/dataset"
import "./App.css"
import { useState } from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()


  {/* instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  } */}

function whichInstruction(catValue, resValue, itemValue)
{
  if (catValue===null && resValue===null)
  {
    return appInfo.instructions.start;
  }
  else if (catValue===null && resValue!==null)
  {
    return appInfo.instructions.onlyRestaurant;
  }
  else if (catValue!==null && resValue===null)
  {
    return appInfo.instructions.onlyCategory;
  }
  else if (catValue!==null && resValue!==null && itemValue===null)
  {
    return appInfo.instructions.noSelectedItem;
  }
  else if (catValue!==null && resValue!==null && itemValue!==null)
  {
    return appInfo.instructions.allSelected;
  }


}

export function App() {
  const [currCategory, setCurrCategory] = useState(null)
  const [currRestaurant, setCurrRestaurant] = useState(null)
  const [currMenuItem, setCurrMenuItem] = useState(null)


  const currentMenuItems = data.filter((item) => {
    return item.food_category === currCategory && item.restaurant === currRestaurant;
  })
  

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>

          {/* YOUR CODE HERE */}
          {categories.map((category, idx) => (
            <Chip 
            key={idx} 
            label={category} 
            isActive={category === currCategory} 
            onOpen={() => {
              if (category !== currCategory)
              {
                setCurrCategory(category);
                setCurrMenuItem(null);
              }
            }}
            onClose={() => {
              if (category === currCategory)
              {
                setCurrCategory(null);
                setCurrMenuItem(null);
              }
            }} />
          ))}

        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        {/* Setting "header=" means the props has one data set named header  */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant, idx) => (
              <Chip 
              key={idx} 
              label={restaurant} 
              isActive={restaurant === currRestaurant} 
              onOpen={() => {
                if (restaurant !== currRestaurant)
                {
                  setCurrRestaurant(restaurant);
                  setCurrMenuItem(null);
                }
              }}
              onClose={() => {
                if (restaurant === currRestaurant)
                {
                  setCurrRestaurant(null);
                  setCurrMenuItem(null);
                }
              }} />
            ))}
          </div>
        </div>


        {/* INSTRUCTIONS GO HERE */}  
        <Instructions instructions={whichInstruction(currCategory, currRestaurant, currMenuItem)}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, idx) => (
            <Chip 
            key={idx} 
            label={item.item_name} 
            isActive={item === currMenuItem} 
            onOpen={() => {
              if (item !== currMenuItem)
              {
                setCurrMenuItem(item);
              }
            }}
            onClose={() => {
              if (item === currMenuItem)
              {
                setCurrMenuItem(null);
              }
            }}
             />
          )

          )}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            <NutritionalLabel item={currMenuItem}/>
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
