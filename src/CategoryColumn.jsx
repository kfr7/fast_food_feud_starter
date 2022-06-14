import * as React from "react"
import Chip from "./components/Chip/Chip"

export function CategoryColumn(props) {

  return (
    <div className="CategoriesColumn col">
        <div className="categories options">
            <h2 className="title">Categories</h2>

            {/* YOUR CODE HERE */}
            {console.log(props)}
            {props.categories.map((category, idx) => (
                <Chip 
                key={idx} 
                label={category} 
                isActive={category === props.currCategory} 
                onOpen={() => {
                    if (category !== props.currCategory)
                    {
                      props.setCurrCategory(category);
                      props.setCurrMenuItem(null);
                    }
                  }}
                onClose={() => {
                    if (category === props.currCategory)
                    {
                      props.setCurrCategory(null);
                      props.setCurrMenuItem(null);
                    }
                  }} />
            ))}
    </div>
  </div>
  )
}

export default CategoryColumn
