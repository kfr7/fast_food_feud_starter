import * as React from "react"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import CategoryColumn from "./CategoryColumn"
import RestaurantsRow from "./RestaurantsRow"
import MenuDisplay from "./MenuDisplay"
import DataSource from "./DataSource"
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
      <CategoryColumn categories={categories} currCategory={currCategory} setCurrCategory={setCurrCategory} setCurrMenuItem={setCurrMenuItem} />
 
      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        
        {/* RESTAURANTS ROW */}
        <RestaurantsRow restaurants={restaurants} currRestaurant={currRestaurant} setCurrRestaurant={setCurrRestaurant} setCurrMenuItem={setCurrMenuItem} />

        {/* INSTRUCTIONS GO HERE */}  
        <Instructions instructions={whichInstruction(currCategory, currRestaurant, currMenuItem)}/>

        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems={currentMenuItems} currMenuItem={currMenuItem} setCurrMenuItem={setCurrMenuItem}           />

        {/* DATA SOURCE */}
        <DataSource dataSource={appInfo.dataSource} />
      </div>

    </main>
  )
}

export default App