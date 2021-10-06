
import './App.css';
import { Link, Router } from "@reach/router";
import Recipes from './Recipes';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import { useEffect, useState } from 'react';

function App() {

  const API_URL = "http://localhost:8080/api"
  const [listOfRecipes, setList] = useState([]);
  
  useEffect( ()=>{
      fetch(`${API_URL}`)
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
      .then(data => setList(data))
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
