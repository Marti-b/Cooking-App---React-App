import { Link } from "@reach/router";


function Recipes(props){
console.log("Recipies props" , props)
let data = props.recipes;
let recipesToShow = data;
console.log(recipesToShow);

let isFiltered = false;

//Adding filtering from the url
// if prop.ingredient is true means if we are on different the other route of Recipes path="/with/:ingredient"
if (props.ingredient){
    //then we reassign the recipes to show to the filtered ingredients item
    recipesToShow= data
        .filter((recipe)=> recipe.ingredients
        //includes return true or false if it includes the ingredient and if it does, 
        //then it filters so returns a new array with the searched ingredient, and stores it in the array that we loop through
        .includes(props.ingredient));
    isFiltered = true;
}   
    return( 
        <>
        {isFiltered ? 
        (<h3>Recipes with: {props.ingredient}</h3>) : 
        (<h2>Recipes</h2>)}
        <ol>
                {
                    recipesToShow.map((item) => {
                        return(
                          <li key={item.uniqueId}><Link to={`/recipe/${item.uniqueId}`}> {item.title} </Link></li>
                        )
                    })
                } 
        </ol>
        {props.children}
        </>
    )
}  

export default Recipes;