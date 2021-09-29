
import './App.css';
import { Link, Router } from "@reach/router";
import Recipes from './Recipes';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import { useEffect, useState } from 'react';

function App() {

  const API_URL = "https://api.jsonbin.io/b/6149cc24aa02be1d444c4014"
  const [listOfRecipes, setList] = useState([]);
  
//     { uniqueId: 1, title: 'Goulash',  description: 'How to make Goulash. STEP 1 Coat the meat in the seasoned flour. Heat the oil in a frying pan and fru the onion, pepper, carrot and celery. Add the meat and fry until browned.', ingredients: ['potato', 'meat', 'onion', 'paprika'], cookingTime: 125},
//     { uniqueId: 2, title: 'Csirkepaprikás', description: 'How to make CsirkePaprikás',  ingredients: ['dumplings', 'chicken', 'paprika'], cookingTime: 55},
//     { uniqueId: 3, title: 'Bolognese', description: 'You start with choping the...', ingredients: ['beef', 'pasta', 'tomato'], cookingTime: 45},
//     { uniqueId: 4, title: 'Baked chicken stuff', description: 'This is the best hangover recipe ever.', ingredients: ['chicken', 'potato'], cookingTime: 24 }
  useEffect( ()=>{
      fetch(`${API_URL}/latest`)
      .then(res =>res.json())
      .then((data)=>{
        setList(data)})
      .catch((err => console.error(err)))
  }, [])

   function getRecipe(id){

      const recipe = listOfRecipes.find(x =>x.uniqueId.toString() === id)
      return recipe;
   }

   function addRecipe(recipeTitle, desc, ingr){

      const newRecipe =  {
         uniqueId: listOfRecipes.length + 1,
         title: recipeTitle,
         description: desc,
         ingredients: ingr
      }
      fetch(API_URL, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify([...listOfRecipes, newRecipe])
      })
      .then(response => response.json())
      .then(data => setList(data.record))
      .catch((error) => {
        console.error('Error:', error);
      });
   }

  return (
   <>
   <nav>
     <Link to="/">Home</Link>
 
  </nav>
     <div className="App">
       <Router >

       <Recipes recipes={listOfRecipes} path="/">
         <AddRecipe addRecipe={addRecipe} path="/"/>
      </Recipes>

       <Recipes recipes={listOfRecipes} path="/with/:ingredient"/>

       <Recipe getRecipe={getRecipe} path="/recipe/:id"/>

       
       </Router>
    </div>
    {/* <div >
       <input type="text" onChange={(event) => setList(event.target.value)} />
      <button onClick={()=> {

      }}>Add recipe</button>
    </div> */}
     </>
  );

}

export default App;
