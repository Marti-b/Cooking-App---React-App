
import './App.css';
import { Link, Router } from "@reach/router";
import Recipes from './Recipes';
import Recipe from './Recipe';
import { useState } from 'react';

function App() {

  const [listOfRecipes, setList] = useState([
    {uniqueId: 1, title: 'Goulash', 
    description: 'How to make Goulash. '+
    'STEP 1 Coat the meat in the seasoned flour. Heat the oil in a frying pan and fru the onion, pepper, carrot and celery. Add the meat and fry until browned.',
    ingredients: 'potato, meat, onion, paprika',
    cookingTime: 125},
    {uniqueId: 2, title: 'Csirkepaprikás', description: 'How to make CsirkePaprikás', ingredients: 'dumplings, chicken, paprika', cookingTime: 55},
    {uniqueId: 3, title: 'Bolognese', description: 'You start with choping the...', ingredients: 'beef, pasta, tomato', cookingTime: 45},
    {uniqueId: 4, title: 'Baked chicken stuff', description: 'This is the best hangover recipe ever.', ingredients: 'chicken, potato', cookingTime: 24 },
])

   function getRecipe(id){

      const recipe = listOfRecipes.find(x =>x.uniqueId.toString() === id)
      return recipe;
   }
 
  return (
   <> 
   <nav>
     <Link to="/">Home</Link>
  </nav>
     <div className="App">
       <Router > 
       <Recipes props={listOfRecipes} path="/"/>
       <Recipe getRecipe={getRecipe} path="/recipe/:id"/>
       </Router>
   
    </div>
     </>
   
  );
}

export default App;
