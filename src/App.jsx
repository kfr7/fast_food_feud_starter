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
            onClick={() => {
              if (category === currCategory)
                {
                  setCurrCategory(null)
                }
                else
                {
                  setCurrCategory(category);
                }
            }} />
          ))}

        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        {/* Setting "header=" means the props has one data set named header  */}
        

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant, idx) => (
              <Chip 
              key={idx} 
              label={restaurant} 
              isActive={restaurant === currRestaurant} 
              onClick={() => {
                if (restaurant === currRestaurant)
                {
                  setCurrRestaurant(null)
                }
                else
                {
                  setCurrRestaurant(restaurant);
                }
                
                
              }} />
            ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions.start} />

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, idx) => (
            <Chip 
            key={idx} 
            label={item.item_name} 
            isActive={item.item_name === currMenuItem} 
            onClick={() => {
              if (item.item_name === currMenuItem)
                {
                  setCurrMenuItem(null)
                }
                else
                {
                  setCurrMenuItem(item.item_name);
                }
            }} />
          )

          )}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* code hree */}
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
