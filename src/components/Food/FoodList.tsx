import React, { useEffect, useState } from 'react';
import { Recipe } from './type';
import FoodEl from './FoodEl';

function FoodList(): JSX.Element {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch(
      'https://api.edamam.com/search?q=bread&app_id=0b16d858&app_key=c259b3af5bb051472c33b07f80c83cd4',
    )
      .then((res) => res.json())
      .then((data) => setRecipes
      (data.hits));
  });

  return (
    <>
      <div>FoodList</div>
      {recipes.map((recipe) => (
        <FoodEl recipe={recipe} key={recipe.label}/>
      ))}
    </>
  );
}

export default FoodList;
