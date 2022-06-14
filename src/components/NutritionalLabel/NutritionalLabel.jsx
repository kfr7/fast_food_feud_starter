import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

// should be working

export function NutritionalLabel(props) {

  if (props.item)
  {
    return (
      <div className="nutritional-label">
        <h3 className="title">Nutrition Facts</h3>
      
        <h4 className="item-name">{props.item.item_name}</h4>
  
        <ul className="fact-list">
          {nutritionFacts.map((object, idx) => 
            (
              <NutritionalLabelFact key={idx} item={props.item} id={object.id} label={object.label} attribute={object.attribute}/>
            )
          )}
        </ul>
      </div>
    )
  }
  else
  {
    return (null)
  }
  
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
