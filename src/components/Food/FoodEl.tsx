import React from 'react'
import { Recipe } from './type'

function FoodEl ({recipe}:{recipe:Recipe}) : JSX.Element {
  return (
    <div className='recipe'>
        <h1>{recipe.recipe.label}</h1>
        <img src={recipe.recipe.image} alt={recipe.label} />
        <a href={recipe.recipe.url}>View Recipe</a>
        <p>{recipe.recipe.ingredientLines.join('')}</p>
        <p>{recipe.recipe.instructionLines.join('')}</p>
    </div>
  )
}

export default FoodEl