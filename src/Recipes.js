import { Link } from "@reach/router";
import App from "./App";

function Recipes(props){
console.log("Recipies props" , props)
let data = props.recipes;
let recipesToShow = data;
console.log(recipesToShow);

//Adding filtering from the url
// if prop.ingredient is true means if we are on different the other route of Recipes path="/with/:ingredient"
if (props.ingredient){
    //then we reassign the recipes to show to the filtered ingredients item
    recipesToShow= data
        .filter((recipe)=> recipe.ingredients
        //includes return true or false if it includes the ingredient and if it does, 
        //then it filters so returns a new array with the searched ingredient, and stores it in the array that we loop through
        .includes(props.ingredient))
}   
    return( 
        <>
        <h2>Recipes</h2>
       <p> {props.ingredient}</p>
        <ol>
                {
                    recipesToShow.map((item) => {
                        return(
                          <li><Link to={`/recipe/${item.uniqueId}`}> {item.title} </Link></li>
                        )
                    })
                } 
        </ol>
        {props.children}
        </>
    )
}  

export default Recipes;